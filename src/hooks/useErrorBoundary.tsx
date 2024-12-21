import React, { Component, ErrorInfo } from 'react';
import { logger, ErrorSeverity } from '../utils/logger';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logger.logError(error, {
      severity: ErrorSeverity.ERROR,
      component: 'ErrorBoundary',
      context: { errorInfo }
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 text-center">
          <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
          <p>Please try refreshing the page</p>
        </div>
      );
    }

    return this.props.children;
  }
}