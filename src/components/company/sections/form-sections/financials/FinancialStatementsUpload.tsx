import React, { useState } from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { GlowingText } from '../../../../common/GlowingText';
import { darkTheme } from '../../../../../styles/themes/dark';
import { validateFile } from '../../../../../utils/fileValidation';
import type { UploadFile } from 'antd/es/upload/interface';
import type { RcFile } from 'antd/es/upload/interface';

const { Dragger } = Upload;

const fileValidationOptions = {
  allowedTypes: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ],
  maxSize: 10 * 1024 * 1024, // 10MB
};

export const FinancialStatementsUpload: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const beforeUpload = (file: RcFile) => {
    const validation = validateFile(file, fileValidationOptions);
    
    if (!validation.isValid) {
      message.error(validation.error || 'Invalid file');
      return Upload.LIST_IGNORE;
    }

    // Create preview URL and add to file list
    setFileList(prev => [...prev, {
      uid: file.uid,
      name: file.name,
      status: 'done',
      size: file.size,
      type: file.type,
      originFileObj: file,
    }]);

    return false; // Prevent auto upload
  };

  const handleRemove = (file: UploadFile) => {
    setFileList(prev => prev.filter(f => f.uid !== file.uid));
    return true;
  };

  return (
    <div className="space-y-6">
      <GlowingText 
        className="text-lg font-medium mb-4"
        color={darkTheme.colors.accent.primary}
      >
        Financial Statements
      </GlowingText>

      <Dragger
        fileList={fileList}
        beforeUpload={beforeUpload}
        onRemove={handleRemove}
        multiple
        className="financial-statements-upload"
      >
        <p className="text-4xl">
          <InboxOutlined style={{ color: darkTheme.colors.accent.primary }} />
        </p>
        <p className="text-base mt-4">
          Click or drag financial statement files to upload
        </p>
        <p className="text-sm opacity-70 mt-2">
          Supports PDF, DOC, DOCX (max 10MB)
        </p>
      </Dragger>

      {fileList.length > 0 && (
        <div className="mt-4">
          <GlowingText 
            className="text-sm mb-2"
            color={darkTheme.colors.accent.secondary}
          >
            Uploaded Files ({fileList.length})
          </GlowingText>
        </div>
      )}
    </div>
  );
};