import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApplyModalProvider } from './context/ApplyModalContext';
import AppRoutes from './routes/AppRoutes';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error('Component error:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ background: '#1B1F3B', color: '#C9A84C', padding: '40px', fontFamily: 'monospace', minHeight: '100vh' }}>
          <h2 style={{ fontSize: 24, marginBottom: 12 }}>⚠ Component Error</h2>
          <pre style={{ color: 'white', fontSize: 13, whiteSpace: 'pre-wrap' }}>{this.state.error?.message}</pre>
          <pre style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginTop: 8 }}>{this.state.error?.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ApplyModalProvider>
          <AppRoutes />
        </ApplyModalProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
