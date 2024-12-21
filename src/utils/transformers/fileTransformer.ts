import type { UploadFile } from 'antd/es/upload/interface';

export const transformFileList = (fileList: UploadFile[]) => {
  return fileList
    .filter(file => file.status === 'done' && file.originFileObj)
    .map(file => ({
      name: file.name,
      type: file.type,
      size: file.size,
      url: file.url,
      file: file.originFileObj as File,
    }));
};