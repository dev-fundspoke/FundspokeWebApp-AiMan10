import React, { useState } from 'react';
import { Form, Upload, Image, Button } from 'antd';
import { InboxOutlined, DeleteOutlined } from '@ant-design/icons';
import { validateFile } from '../../utils/fileValidation';
import { showMessage } from './ThemedMessage';
import { useThemeContext } from '../../context/ThemeContext';
import { darkTheme } from '../../styles/themes/dark';
import type { UploadFile } from 'antd/es/upload/interface';

const { Dragger } = Upload;

const fileValidationOptions = {
  allowedTypes: ['image/jpeg', 'image/png', 'image/svg+xml'],
  maxSize: 5 * 1024 * 1024, // 5MB
};

export const CompanyLogo: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const [previewUrl, setPreviewUrl] = useState<string>();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const beforeUpload = (file: File) => {
    const validation = validateFile(file, fileValidationOptions);
    
    if (!validation.isValid) {
      showMessage.error(validation.error || 'Invalid file');
      return Upload.LIST_IGNORE;
    }

    // Create preview URL
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Update fileList
    const newFile: UploadFile = {
      uid: '-1',
      name: file.name,
      status: 'done',
      url: URL.createObjectURL(file),
      originFileObj: file,
    };
    setFileList([newFile]);

    return false; // Prevent auto upload
  };

  const handleRemove = () => {
    setPreviewUrl(undefined);
    setFileList([]);
    showMessage.success('Logo removed successfully');
    return true;
  };

  return (
    <Form.Item name="logo" valuePropName="fileList" noStyle>
      <Dragger
        accept=".jpg,.jpeg,.png,.svg"
        beforeUpload={beforeUpload}
        onRemove={handleRemove}
        maxCount={1}
        showUploadList={false}
        fileList={fileList}
        className="logo-upload-dragger"
      >
        {previewUrl ? (
          <div className="p-4 relative group">
            <Image
              src={previewUrl}
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
                handleRemove();
              }}
            >
              Remove
            </Button>
          </div>
        ) : (
          <div className="p-8">
            <p className="text-4xl">
              <InboxOutlined style={{ 
                color: isDark ? darkTheme.colors.accent.primary : darkTheme.colors.accent.secondary 
              }} />
            </p>
            <p className="text-base mt-4">
              Click or drag logo to upload
            </p>
            <p className="text-sm opacity-70 mt-2">
              Supports JPG, PNG, SVG (max 5MB)
            </p>
          </div>
        )}
      </Dragger>
    </Form.Item>
  );
};