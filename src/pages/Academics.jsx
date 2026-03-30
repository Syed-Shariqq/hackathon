import Programs from '../components/Programs';
import { useApplyModal } from '../context/ApplyModalContext';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Academics() {
  const { openApply } = useApplyModal();

  return (
    <>
      <ScrollToTop />
      <Programs
        onApply={openApply}
        showAllPrograms
        enableDepartmentNav
      />
    </>
  );
}
