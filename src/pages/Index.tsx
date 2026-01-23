import Hero from "@/components/Hero";
import EventsList from "@/components/EventsList";
import PastEvents from "@/components/PastEvents";
import NewsletterSignup from "@/components/NewsletterSignup";
import SpeakerApplication from "@/components/SpeakerApplication";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ScrollReveal>
        <EventsList />
      </ScrollReveal>
      <ScrollReveal>
        <PastEvents />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <NewsletterSignup />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <SpeakerApplication />
      </ScrollReveal>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </main>
  );
};

export default Index;
