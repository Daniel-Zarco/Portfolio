import { usePage } from '../hooks/usePage';
import { AboutSection } from '../components/About';

export default function SobreMi() {
  usePage();

  return (
    <div className="page">
      <AboutSection />
    </div>
  );
}
