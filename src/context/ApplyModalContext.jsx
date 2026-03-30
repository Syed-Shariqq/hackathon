import { createContext, useContext, useMemo, useState } from 'react';

const ApplyModalContext = createContext(null);

export function ApplyModalProvider({ children }) {
  const [applyOpen, setApplyOpen] = useState(false);
  const [applyCourse, setApplyCourse] = useState(null);

  const value = useMemo(
    () => ({
      applyOpen,
      applyCourse,
      openApply: (course) => {
        setApplyCourse(course ?? null);
        setApplyOpen(true);
      },
      closeApply: () => setApplyOpen(false),
    }),
    [applyOpen, applyCourse]
  );

  return <ApplyModalContext.Provider value={value}>{children}</ApplyModalContext.Provider>;
}

export function useApplyModal() {
  const ctx = useContext(ApplyModalContext);
  if (!ctx) {
    throw new Error('useApplyModal must be used within ApplyModalProvider');
  }
  return ctx;
}
