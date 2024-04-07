import { Button } from '@wa/common-ui';
import React, { Component, ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // log info
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error message and UI here
      return this.props.fallback ? (
        this.props.fallback
      ) : (
        <div>
          <h1>Something went wrong.</h1>
          <Button
            label="Try again"
            onClick={() => this.setState({ hasError: false })}
          />
        </div>
      );
    }

    return this.props.children;
  }
}
