import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ApplicationModal from '../components/ApplicationModal';
import { useApplyModal } from '../context/ApplyModalContext';

export default function MainLayout() {
  const { openApply, applyOpen, applyCourse, closeApply } = useApplyModal();

  return (
    <div className="font-[Plus_Jakarta_Sans]">
      <Navbar onApply={() => openApply(null)} />
      <Outlet />
      <Footer />
      {applyOpen && <ApplicationModal course={applyCourse} onClose={closeApply} />}
    </div>
  );
}
