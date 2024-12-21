import { useState, useEffect } from 'react';
import { showMessage } from '../components/common/ThemedMessage';

export const useOfflineSupport = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      showMessage.success('Back online! Syncing changes...');
    };

    const handleOffline = () => {
      setIsOnline(false);
      showMessage.warning('You are offline. Changes will be saved locally.');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { isOnline };
};