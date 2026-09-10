import { usePage } from '../hooks/usePage';
import { ProjectsSection } from '../components/Projects';
import { CertificationsSection } from '../components/Certifications';

export default function Proyectos() {
  usePage();

  return (
    <div className="page">
      <ProjectsSection />
      <CertificationsSection />
    </div>
  );
}
