import { usePage } from '../hooks/usePage';
import { ProjectsSection } from '../components/Projects';

export default function Proyectos() {
  usePage();

  return (
    <div className="page">
      <ProjectsSection />
    </div>
  );
}
