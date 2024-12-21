import React from 'react';
import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useUpload } from '../../hooks/useUpload';
import type { FileValidationOptions } from '../../types/file';

const { Dragger } = Upload;

interface FileUploadProps {
  options: FileValidationOptions;
  onChange?: (fileList: File[]) => void;
  className?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  options,
  onChange,
  className = '',
}) => {
  const {
    fileList,
    beforeUpload,
    handleRemove,
  } = useUpload(options);

  return (
    <Dragger
      fileList={fileList}
      beforeUpload={beforeUpload}
      onRemove={handleRemove}
      multiple={options.maxFiles !== 1}
      maxCount={options.maxFiles}
      className={className}
      onChange={info => {
        if (onChange) {
          const files = info.fileList
            .filter(f => f.status === 'done')
            .map(f => f.originFileObj)
            .filter((f): f is File => f !== undefined);
          onChange(files);
        }
      }}
    >
      <p className="text-4xl">
        <InboxOutlined />
      </p>
      <p className="text-base mt-4">
        Click or drag files to upload
      </p>
      <p className="text-sm opacity-70 mt-2">
        {options.allowedTypes.join(', ')} (max {options.maxSize / (1024 * 1024)}MB)
      </p>
    </Dragger>
  );
};