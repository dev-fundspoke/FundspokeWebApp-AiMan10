import React from 'react';
import { Form, Image, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useUploadState } from '../../../../hooks/upload/useUploadState';
import { useUploadHandlers } from '../../../../hooks/upload/useUploadHandlers';
import { BaseUpload } from '../../../upload/BaseUpload';
import { useThemeContext } from '../../../../context/ThemeContext';
import { darkTheme } from '../../../../styles/themes/dark';

const uploadOptions = {
  maxFiles: 1,
  allowedTypes: ['image/jpeg', 'image/png', 'image/svg+xml'],
  maxSize: 5 * 1024 * 1024, // 5MB
  generatePreview: true,
};

export const CompanyLogo: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const { state, updateFileList, updatePreviewUrl, resetState } = useUploadState();
  const { beforeUpload, handleRemove } = useUploadHandlers(
    uploadOptions,
    updateFileList,
    updatePreviewUrl
  );

  return (
    <Form.Item name="logo" valuePropName="fileList" noStyle>
      {state.previewUrl ? (
        <div className="p-4 relative group">
          <Image
            src={state.previewUrl}
            alt="Company Logo"
            className="max-h-48 object-contain mx-auto"
            preview={false}
          />
          <p className="mt-4 text-sm opacity-70">
            Click or drag to replace
          </p>
          <Button
            danger
            icon={<DeleteOutlined />}
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={(e) => {
              e.stopPropagation();
              resetState();
            }}
          >
            Remove
          </Button>
        </div>
      ) : (
        <BaseUpload
          options={uploadOptions}
          className="logo-upload-dragger"
        />
      )}
    </Form.Item>
  );
};