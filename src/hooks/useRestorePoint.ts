import { useState, useCallback } from 'react';
import { restorePointManager } from '../utils/restorePoint';
import { readProjectFiles, readConfigFiles } from '../utils/fileSystem';
import { showMessage } from '../components/common/ThemedMessage';

export const useRestorePoint = () => {
  const [isCreating, setIsCreating] = useState(false);

  const createRestorePoint = useCallback(async (name: string) => {
    try {
      setIsCreating(true);
      const files = await readProjectFiles();
      const configFiles = await readConfigFiles();
      const packageJson = JSON.stringify(require('../../package.json'));

      const restorePoint = restorePointManager.createRestorePoint(
        name,
        files,
        packageJson,
        configFiles
      );

      showMessage.success(`Restore point "${name}" created successfully`);
      return restorePoint;
    } catch (error) {
      showMessage.error('Failed to create restore point');
      throw error;
    } finally {
      setIsCreating(false);
    }
  }, []);

  const getRestorePoints = useCallback(() => {
    return restorePointManager.getRestorePoints();
  }, []);

  return {
    createRestorePoint,
    getRestorePoints,
    isCreating,
  };
};