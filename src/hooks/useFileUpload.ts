import { useState } from 'react';
import { message } from 'antd';
import { validateFile } from '../utils/fileValidation';
import type { UploadFile } from 'antd/es/upload/interface';
import type { FileValidationOptions } from '../types/file';

export const useFileUpload = (validationOptions: FileValidationOptions) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState<Record<string, number>>({});

  const beforeUpload = async (file: File) => {
    const validation = validateFile(file, validationOptions);
    
    if (!validation.isValid) {
      message.error(validation.error || 'Invalid file');
      return false;
    }

    // Simulate upload progress
    setUploading(prev => ({ ...prev, [file.name]: 0 }));
    
    for (let progress = 0; progress <= 100; progress += 10) {
      await new Promise(resolve => setTimeout(resolve, 100));
      setUploading(prev => ({ ...prev, [file.name]: progress }));
    }

    setFileList(prev => [...prev, {
      uid: file.name,
      name: file.name,
      status: 'done',
      url: URL.createObjectURL(file),
    }]);

    setUploading(prev => {
      const newState = { ...prev };
      delete newState[file.name];
      return newState;
    });

    message.success(`${file.name} uploaded successfully`);
    return false;
  };

  const onRemove = (file: UploadFile) => {
    setFileList(prev => prev.filter(f => f.uid !== file.uid));
    message.success(`${file.name} removed`);
    return true;
  };

  return {
    fileList,
    uploading,
    beforeUpload,
    onRemove,
  };
};