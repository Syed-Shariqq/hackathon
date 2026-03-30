import Programs from '../components/Programs';
import { useApplyModal } from '../context/ApplyModalContext';

export default function Academics() {
  const { openApply } = useApplyModal();

  return (
    <Programs
      onApply={openApply}
      showAllPrograms
      enableDepartmentNav
    />
  );
}
