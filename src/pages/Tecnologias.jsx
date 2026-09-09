import { usePage } from '../hooks/usePage';
import TechStack from '../components/TechStack';
import { EducationSection } from '../components/About';

export default function Tecnologias() {
  usePage();

  return (
    <div className="page">
      <TechStack />
      <EducationSection />
    </div>
  );
}
