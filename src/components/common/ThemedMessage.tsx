import React from 'react';
import { message, App } from 'antd';
import type { MessageInstance } from 'antd/es/message/interface';

let messageApi: MessageInstance;

const ThemedMessage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [api, contextHolder] = message.useMessage();

  // Store the message API instance
  React.useEffect(() => {
    messageApi = api;
  }, [api]);

  return (
    <App>
      {contextHolder}
      {children}
    </App>
  );
};

export default ThemedMessage;

// Export a message utility that uses the stored API instance
export const showMessage = {
  success: (content: string) => messageApi?.success(content),
  error: (content: string) => messageApi?.error(content),
  warning: (content: string) => messageApi?.warning(content),
  info: (content: string) => messageApi?.info(content),
};