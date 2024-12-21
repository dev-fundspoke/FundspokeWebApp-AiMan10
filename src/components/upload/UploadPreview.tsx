import React from 'react';
import { Image, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import type { UploadState } from '../../types/upload';

interface UploadPreviewProps {
  state: UploadState;
  onRemove: () => void;
}

export const UploadPreview: React.FC<UploadPreviewProps> = ({
  state,
  onRemove,
}) => (
  <div className="p-4 relative group">
    <Image
      src={state.previewUrl}
      alt="Upload Preview"
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
        onRemove();
      }}
    >
      Remove
    </Button>
  </div>
);