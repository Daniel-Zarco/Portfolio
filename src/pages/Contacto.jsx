import { usePage } from '../hooks/usePage';
import { ContactSection } from '../components/Contact';

export default function Contacto() {
  usePage();

  return (
    <div className="page">
      <ContactSection />
    </div>
  );
}
