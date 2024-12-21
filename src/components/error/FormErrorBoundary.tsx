import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { ErrorFallback } from './ErrorFallback';
import { logger } from '../../utils/logger';
import { ErrorSeverity } from '../../utils/logger';

export const FormErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ErrorBoundary
      fallback={<ErrorFallback />}
      onError={(error, errorInfo) => {
        logger.logError(error, {
          component: 'NewCompanyForm',
          severity: ErrorSeverity.ERROR,
          context: { errorInfo }
        });
      }}
    >
      {children}
    </ErrorBoundary>
  );
};