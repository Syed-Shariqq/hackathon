import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import About from '../components/About';
import Programs from '../components/Programs';
import WhyUs from '../components/WhyUs';
import CampusLife from '../components/CampusLife';
import Testimonials from '../components/Testimonials';
import NewsEvents from '../components/NewsEvents';
import CTABanner from '../components/CTABanner';
import { useApplyModal } from '../context/ApplyModalContext';

export default function Home() {
  const { openApply } = useApplyModal();

  return (
    <>
      <Hero onApply={() => openApply(null)} />
      <StatsBar />
      <About />
      <Programs onApply={openApply} />
      <WhyUs />
      <CampusLife />
      <Testimonials />
      <NewsEvents />
      <CTABanner onApply={() => openApply(null)} />
    </>
  );
}
