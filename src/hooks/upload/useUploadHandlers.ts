import { Upload } from 'antd';
import { showMessage } from '../../components/common/ThemedMessage';
import { validateFile } from '../../utils/fileValidation';
import type { UploadFile } from 'antd/es/upload/interface';
import type { UploadOptions } from '../../types/upload';

export const useUploadHandlers = (
  options: UploadOptions,
  updateFileList: (files: UploadFile[]) => void,
  updatePreviewUrl?: (url?: string) => void,
) => {
  const beforeUpload = (file: File) => {
    const validation = validateFile(file, options);
    
    if (!validation.isValid) {
      showMessage.error(validation.error || 'Invalid file');
      return Upload.LIST_IGNORE;
    }

    if (options.generatePreview && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updatePreviewUrl?.(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }

    const newFile: UploadFile = {
      uid: `-${Date.now()}`,
      name: file.name,
      status: 'done',
      url: URL.createObjectURL(file),
      originFileObj: file,
    };

    updateFileList(options.maxFiles === 1 ? [newFile] : prev => [...prev, newFile]);
    return false;
  };

  const handleRemove = (file: UploadFile) => {
    updateFileList(prev => prev.filter(f => f.uid !== file.uid));
    if (file.url === updatePreviewUrl) {
      updatePreviewUrl?.(undefined);
    }
    showMessage.success('File removed successfully');
    return true;
  };

  return {
    beforeUpload,
    handleRemove,
  };
};