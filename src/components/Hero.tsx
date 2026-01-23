import { ArrowRight, Calendar } from "lucide-react";
import eventsData from "@/data/events.json";
import { formatDate } from "@/utils/formatDate";
import type { Event } from "@/types/events";

const Hero = () => {
  const nextEvent: Event | undefined = eventsData.upcoming[0];

  return (
    <section className="noise-bg min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container max-w-4xl text-center">
        <h1 className="gradient-text text-hero mb-2 animate-fade-up">
          Cursor Meetup
        </h1>
        <p className="text-hero-sub text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Philadelphia
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
          A Philadelphia-based community for developers, designers, engineers, and AI enthusiasts 
          exploring how tools like Cursor are reshaping the way we build, design, and think.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {nextEvent && nextEvent.lumaUrl ? (
            <a
              href={nextEvent.lumaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Calendar className="w-5 h-5" />
              Register for {formatDate(nextEvent.date)}
              <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <span className="btn-disabled inline-flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Next Event Coming Soon
            </span>
          )}
          
          <a
            href="#events"
            className="btn-secondary inline-flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
