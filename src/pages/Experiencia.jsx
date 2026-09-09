import { usePage } from '../hooks/usePage';
import { ExperienceSection } from '../components/About';

export default function Experiencia() {
  usePage();

  return (
    <div className="page">
      <ExperienceSection />
    </div>
  );
}
