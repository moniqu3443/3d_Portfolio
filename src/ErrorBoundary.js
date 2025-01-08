import React, { Component } from 'react';

// Fallback UI component to display when an error occurs
const FallbackUI = ({ error }) => (
  <div style={{ padding: '20px', backgroundColor: '#ffcccb', color: 'red' }}>
    <h2>Something went wrong.</h2>
    <p>{error.message}</p>
  </div>
);

// ErrorBoundary component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // This lifecycle method is triggered when an error is caught in any of the child components
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // This lifecycle method is triggered when an error is caught
  componentDidCatch(error, info) {
    console.error("Error caught in ErrorBoundary:", error);
    console.error("Error info:", info);
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      // You can customize this fallback UI as needed
      return <FallbackUI error={error} />;
    }

    // If no error, render the children components
    return this.props.children;
  }
}

export default ErrorBoundary;
