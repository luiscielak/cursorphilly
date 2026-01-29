import Hero from '@/components/Hero';
import EventsList from '@/components/EventsList';
import NewsletterSignup from '@/components/NewsletterSignup';
import SpeakerApplication from '@/components/SpeakerApplication';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EventsList />
      <NewsletterSignup />
      <SpeakerApplication />
      <Footer />
    </main>
  );
}
