import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';
import VirtualList from 'rc-virtual-list';
import { DocumentEntry } from './DocumentEntry';
import { validateFile } from '../../../../utils/fileValidation';
import { showMessage } from '../../../common/ThemedMessage';
import { SciFiCard } from '../../../common/SciFiCard';
import type { UploadFile } from 'antd/es/upload/interface';

const ITEM_HEIGHT = 200; // Approximate height of each document entry

export const DocumentLibrary: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ITEM_HEIGHT) {
      // Load more items if needed
    }
  };

  return (
    <div className="space-y-8">
      <Upload.Dragger
        multiple
        beforeUpload={validateFile}
        onChange={({ fileList }) => setFileList(fileList)}
        fileList={fileList}
      >
        <p className="ant-upload-drag-icon">
          <UploadOutlined />
        </p>
        <p className="ant-upload-text">Click or drag files to upload</p>
      </Upload.Dragger>

      <SciFiCard className="mt-4">
        <VirtualList
          data={fileList}
          height={400}
          itemHeight={ITEM_HEIGHT}
          itemKey="uid"
          onScroll={onScroll}
        >
          {(file) => (
            <DocumentEntry
              key={file.uid}
              file={file}
              onRemove={() => {
                setFileList(prev => prev.filter(f => f.uid !== file.uid));
              }}
            />
          )}
        </VirtualList>
      </SciFiCard>

      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => document.querySelector('.ant-upload-btn')?.click()}
      >
        Add Document
      </Button>
    </div>
  );
};