import CTABanner from './CTABanner';

export default function AdmissionsPreview({ onApply }) {
  return (
    <CTABanner
      onApply={onApply}
      showDownload={false}
      viewMoreTo="/admissions"
    />
  );
}

