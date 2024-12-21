import { useState } from 'react';
import type { UploadFile } from 'antd/es/upload/interface';
import type { UploadState } from '../../types/upload';

export const useUploadState = (initialState?: Partial<UploadState>) => {
  const [state, setState] = useState<UploadState>({
    fileList: [],
    previewUrl: undefined,
    ...initialState
  });

  const updateFileList = (newFileList: UploadFile[]) => {
    setState(prev => ({ ...prev, fileList: newFileList }));
  };

  const updatePreviewUrl = (url?: string) => {
    setState(prev => ({ ...prev, previewUrl: url }));
  };

  const resetState = () => {
    setState({ fileList: [], previewUrl: undefined });
  };

  return {
    state,
    updateFileList,
    updatePreviewUrl,
    resetState
  };
};