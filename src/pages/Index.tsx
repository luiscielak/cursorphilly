/**
 * CHANGELOG:
 * - Added WhatToExpect section between Hero and EventsList
 * - Adjusted scroll reveal delays for better flow
 */

import Hero from "@/components/Hero";
import WhatToExpect from "@/components/WhatToExpect";
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
        <WhatToExpect />
      </ScrollReveal>
      <ScrollReveal>
        <EventsList />
      </ScrollReveal>
      <ScrollReveal>
        <PastEvents />
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <NewsletterSignup />
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <SpeakerApplication />
      </ScrollReveal>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </main>
  );
};

export default Index;
