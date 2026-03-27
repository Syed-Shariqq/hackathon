import { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Programs from './components/Programs';
import WhyUs from './components/WhyUs';
import CampusLife from './components/CampusLife';
import Testimonials from './components/Testimonials';
import NewsEvents from './components/NewsEvents';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

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
      <div className="font-[Plus_Jakarta_Sans]">
        <Navbar />
        <Hero />
        <StatsBar />
        <About />
        <Programs />
        <WhyUs />
        <CampusLife />
        <Testimonials />
        <NewsEvents />
        <CTABanner />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}