import React from 'react';
import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useUploadState } from '../../hooks/upload/useUploadState';
import { useUploadHandlers } from '../../hooks/upload/useUploadHandlers';
import type { UploadOptions } from '../../types/upload';

const { Dragger } = Upload;

interface BaseUploadProps {
  options: UploadOptions;
  onChange?: (files: File[]) => void;
  className?: string;
}

export const BaseUpload: React.FC<BaseUploadProps> = ({
  options,
  onChange,
  className = '',
}) => {
  const { state, updateFileList } = useUploadState();
  const { beforeUpload, handleRemove } = useUploadHandlers(options, updateFileList);

  return (
    <Dragger
      fileList={state.fileList}
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
        Supports {options.allowedTypes.join(', ')} (max {options.maxSize / (1024 * 1024)}MB)
      </p>
    </Dragger>
  );
};