import { v4 as uuidv4 } from 'uuid';

export interface RestorePoint {
  id: string;
  name: string;
  timestamp: string;
  files: Record<string, string>;
  packageJson: string;
  configFiles: Record<string, string>;
}

class RestorePointManager {
  private static instance: RestorePointManager;
  private restorePoints: RestorePoint[] = [];
  private readonly STORAGE_KEY = 'bolt_restore_points';

  private constructor() {
    this.loadRestorePoints();
  }

  static getInstance(): RestorePointManager {
    if (!RestorePointManager.instance) {
      RestorePointManager.instance = new RestorePointManager();
    }
    return RestorePointManager.instance;
  }

  private loadRestorePoints(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      this.restorePoints = stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Failed to load restore points:', error);
      this.restorePoints = [];
    }
  }

  private saveRestorePoints(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.restorePoints));
    } catch (error) {
      console.error('Failed to save restore points:', error);
    }
  }

  createRestorePoint(name: string, files: Record<string, string>, packageJson: string, configFiles: Record<string, string>): RestorePoint {
    const restorePoint: RestorePoint = {
      id: uuidv4(),
      name,
      timestamp: new Date().toISOString(),
      files,
      packageJson,
      configFiles,
    };

    this.restorePoints.push(restorePoint);
    this.saveRestorePoints();
    return restorePoint;
  }

  getRestorePoints(): RestorePoint[] {
    return [...this.restorePoints];
  }

  getRestorePoint(id: string): RestorePoint | undefined {
    return this.restorePoints.find(point => point.id === id);
  }

  deleteRestorePoint(id: string): void {
    this.restorePoints = this.restorePoints.filter(point => point.id !== id);
    this.saveRestorePoints();
  }
}

export const restorePointManager = RestorePointManager.getInstance();