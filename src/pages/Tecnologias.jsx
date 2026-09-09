import { usePage } from '../hooks/usePage';
import { SkillsSection, EducationSection } from '../components/About';

export default function Tecnologias() {
  usePage();

  return (
    <div className="page">
      <SkillsSection />
      <EducationSection />
    </div>
  );
}
