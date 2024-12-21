import { useState, useCallback } from 'react';

export const useErrorRecovery = () => {
  const [recoveryData, setRecoveryData] = useState<any>(null);

  const startRecovery = useCallback((data: any) => {
    setRecoveryData(data);
    localStorage.setItem('form_recovery_data', JSON.stringify(data));
  }, []);

  const clearRecoveryData = useCallback(() => {
    setRecoveryData(null);
    localStorage.removeItem('form_recovery_data');
  }, []);

  const getRecoveryData = useCallback(() => {
    if (recoveryData) return recoveryData;
    
    const saved = localStorage.getItem('form_recovery_data');
    if (saved) {
      const data = JSON.parse(saved);
      setRecoveryData(data);
      return data;
    }
    
    return null;
  }, [recoveryData]);

  return {
    startRecovery,
    clearRecoveryData,
    getRecoveryData,
    hasRecoveryData: !!recoveryData,
  };
};