import React from 'react';
import { Form, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { GlowingText } from '../../../../common/GlowingText';
import { darkTheme } from '../../../../../styles/themes/dark';
import { validateFile } from '../../../../../utils/fileValidation';

const fileValidationOptions = {
  allowedTypes: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/jpeg',
    'image/png'
  ],
  maxSize: 10 * 1024 * 1024 // 10MB
};

export const SupportingDocuments: React.FC = () => {
  const handleBeforeUpload = (file: File) => {
    const validation = validateFile(file, fileValidationOptions);
    if (!validation.isValid) {
      return Upload.LIST_IGNORE;
    }
    return false; // Prevent auto upload
  };

  return (
    <div className="space-y-6">
      <GlowingText 
        className="text-lg font-medium"
        color={darkTheme.colors.accent.primary}
      >
        Supporting Documents
      </GlowingText>

      <Form.Item
        name={['technologyDescription', 'supportingDocuments']}
        getValueFromEvent={(e) => {
          if (Array.isArray(e)) {
            return e;
          }
          return e?.fileList;
        }}
        valuePropName="fileList"
      >
        <Upload.Dragger
          beforeUpload={handleBeforeUpload}
          multiple
          showUploadList={{
            showDownloadIcon: true,
            showRemoveIcon: true,
          }}
          className="technology-upload-dragger"
        >
          <p className="text-4xl">
            <UploadOutlined style={{ color: darkTheme.colors.accent.primary }} />
          </p>
          <p className="text-base mt-4">
            Click or drag files to upload
          </p>
          <p className="text-sm opacity-70 mt-2">
            Supports PDF, DOC, DOCX, JPG, PNG (max 10MB)
          </p>
        </Upload.Dragger>
      </Form.Item>
    </div>
  );
};