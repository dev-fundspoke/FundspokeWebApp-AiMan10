import { useState } from 'react';
import { Upload } from 'antd';
import { showMessage } from '../components/common/ThemedMessage';
import { validateFile } from '../utils/fileValidation';
import type { UploadFile } from 'antd/es/upload/interface';
import type { FileValidationOptions } from '../types/file';

export const useUpload = (options: FileValidationOptions) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string>();

  const beforeUpload = (file: File) => {
    const validation = validateFile(file, options);
    
    if (!validation.isValid) {
      showMessage.error(validation.error || 'Invalid file');
      return Upload.LIST_IGNORE;
    }

    // Create preview URL for images
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }

    // Update fileList
    const newFile: UploadFile = {
      uid: `-${Date.now()}`,
      name: file.name,
      status: 'done',
      url: URL.createObjectURL(file),
      originFileObj: file,
    };

    const newFileList = options.maxFiles === 1 ? [newFile] : [...fileList, newFile];
    setFileList(newFileList);

    return false; // Prevent auto upload
  };

  const handleRemove = (file: UploadFile) => {
    setFileList(prev => prev.filter(f => f.uid !== file.uid));
    if (previewUrl && file.url === previewUrl) {
      setPreviewUrl(undefined);
    }
    showMessage.success('File removed successfully');
    return true;
  };

  return {
    fileList,
    previewUrl,
    beforeUpload,
    handleRemove,
    setFileList,
    setPreviewUrl,
  };
};