import { usePage } from '../hooks/usePage';
import Hero from '../components/Hero';

export default function Home() {
  usePage();

  return (
    <div className="page">
      <Hero />
    </div>
  );
}
