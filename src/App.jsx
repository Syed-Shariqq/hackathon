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
    console.error('Error caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ background: 'darkred', color: 'white', padding: '20px', fontSize: '16px', whiteSpace: 'pre-wrap' }}>
          <h2>Component Error Caught!</h2>
          <p>{this.state.error?.message}</p>
          <p>{this.state.error?.stack}</p>
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