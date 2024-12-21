import React from 'react';
import { Form, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { GlowingText } from '../../../../common/GlowingText';
import { darkTheme } from '../../../../../styles/themes/dark';
import { validateFile } from '../../../../../utils/fileValidation';

const { Dragger } = Upload;

const fileValidationOptions = {
  allowedTypes: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ],
  maxSize: 10 * 1024 * 1024, // 10MB
};

interface DocumentUploadProps {
  namePrefix: (string | number)[];
}

export const DocumentUpload: React.FC<DocumentUploadProps> = ({ namePrefix }) => {
  const beforeUpload = (file: File) => {
    const validation = validateFile(file, fileValidationOptions);
    
    if (!validation.isValid) {
      message.error(validation.error || 'Invalid file');
      return Upload.LIST_IGNORE;
    }

    return false; // Prevent auto upload
  };

  return (
    <div className="space-y-4">
      <GlowingText 
        className="text-base font-medium"
        color={darkTheme.colors.accent.secondary}
      >
        Supporting Documents
      </GlowingText>

      <Form.Item
        name={namePrefix}
        valuePropName="fileList"
        getValueFromEvent={e => {
          if (Array.isArray(e)) {
            return e;
          }
          return e?.fileList;
        }}
      >
        <Dragger
          beforeUpload={beforeUpload}
          multiple
          className="debt-document-upload"
        >
          <p className="text-4xl">
            <InboxOutlined style={{ color: darkTheme.colors.accent.primary }} />
          </p>
          <p className="text-base mt-4">
            Click or drag files to upload
          </p>
          <p className="text-sm opacity-70 mt-2">
            Supports PDF, DOC, DOCX (max 10MB)
          </p>
        </Dragger>
      </Form.Item>
    </div>
  );
};