/**
 * CHANGELOG:
 * - Updated subheadline with stronger value proposition
 * - Made "Register" CTA visually dominant (primary)
 * - Added microcopy under primary CTA: "Free · RSVP required · Limited seats"
 * - "View all events" now secondary button
 */

import { ArrowRight, Calendar } from "lucide-react";
import eventsData from "@/data/events.json";
import { formatDate } from "@/utils/formatDate";
import type { Event } from "@/types/events";

const Hero = () => {
  const nextEvent: Event | undefined = eventsData.upcoming[0];

  return (
    <section className="noise-bg grid-pattern flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full animate-float opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(262 83% 66% / 0.15) 0%, transparent 70%)',
            top: '-20%',
            left: '-10%',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full animate-float-delayed opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(262 60% 70% / 0.2) 0%, transparent 70%)',
            top: '10%',
            right: '-15%',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full animate-float-slow opacity-25"
          style={{
            background: 'radial-gradient(circle, hsl(280 70% 60% / 0.12) 0%, transparent 70%)',
            bottom: '5%',
            left: '20%',
          }}
        />
      </div>

      {/* Hero glow */}
      <div className="hero-glow" />

      <div className="container max-w-4xl text-center relative z-10">
        <h1 className="gradient-text text-glow text-hero mb-2 animate-fade-up">
          Cursor Philly
        </h1>
        <p className="text-hero-sub text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Philadelphia Meetup
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
          Join Philly developers, designers, and creators sharing workflows, demos, and insights{" "}
          <span className="whitespace-nowrap">about building with AI.</span>
        </p>

        <div className="flex flex-col items-center gap-4 animate-fade-up" style={{ animationDelay: '0.25s' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-start w-full">
            <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
              {nextEvent && nextEvent.lumaUrl ? (
                <a
                  href={nextEvent.lumaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 w-full sm:w-auto justify-center text-base"
                >
                  <Calendar className="w-5 h-5" />
                  Register for the next meetup
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <span className="btn-disabled inline-flex items-center gap-2 w-full sm:w-auto">
                  <Calendar className="w-5 h-5" />
                  Next Event Coming Soon
                </span>
              )}
              {nextEvent && nextEvent.lumaUrl && (
                <span className="text-xs text-muted-foreground text-center">
                  Free · RSVP required · Limited seats
                </span>
              )}
            </div>

            <a
              href="#events"
              className="btn-secondary inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              View all events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
