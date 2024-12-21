import type { ErrorLogOptions } from '../../types/error';

export class FirebaseError extends Error {
  constructor(
    message: string,
    public code: string,
    public context?: ErrorLogOptions['context']
  ) {
    super(message);
    this.name = 'FirebaseError';
  }
}