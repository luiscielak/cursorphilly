'use client';

import Link from 'next/link';
import eventsData from '@/data/events.json';

const h1Classes = 'font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent';
export default function Hero() {
  const latestEvent = eventsData.upcoming[0];

  return (
    <section className="relative min-h-screen flex items-center justify-center dither-strong" style={{ backgroundColor: 'var(--background-color, #0a0a0a)' }}>
      <div className="container mx-auto px-4 text-center relative z-10" style={{ paddingTop: 'var(--hero-padding, 80px)', paddingBottom: 'var(--hero-padding, 80px)' }}>
        <h1 className={"font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent text-5xl sm:text-7xl md:text-8xl lg:text-9xl"} style={{ 
          fontSize: 'var(--hero-title-size, clamp(48px, 8vw, 96px))',
          backgroundImage: 'linear-gradient(to right, var(--gradient-from, #ffffff), var(--gradient-via, #c4b5fd), var(--gradient-to, #a78bfa))'
        }}>
          Cursor Meetup
        </h1>
        <h2 className="font-light mb-4 text-xl sm:text-2xl md:text-3xl" style={{ 
          fontSize: 'var(--hero-subtitle-size, clamp(20px, 3vw, 32px))',
          color: 'var(--text-color, #ededed)',
          opacity: 0.7
        }}>
          Philadelphia
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto" style={{ 
          color: 'var(--text-color, #ededed)',
          opacity: 0.6
        }}>
          A Philadelphia-based community for developers, designers, engineers, and AI enthusiasts exploring how tools like Cursor are reshaping the way we build, design, and think.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          {latestEvent && latestEvent.lumaUrl ? (
            <Link
              href={latestEvent.lumaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold transition-all duration-200 transform shadow-lg w-full sm:w-auto text-center"
              style={{
                paddingLeft: 'var(--button-padding-x, 32px)',
                paddingRight: 'var(--button-padding-x, 32px)',
                paddingTop: 'var(--button-padding-y, 16px)',
                paddingBottom: 'var(--button-padding-y, 16px)',
                backgroundColor: 'var(--accent-color, #8b5cf6)',
                borderRadius: 'var(--border-radius, 8px)',
                boxShadow: `0 10px 15px -3px rgba(139, 92, 246, calc(var(--button-shadow-intensity, 0.2) * 0.5))`,
                transform: 'scale(1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `scale(var(--button-hover-scale, 1.05))`;
                e.currentTarget.style.filter = 'brightness(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'brightness(1)';
              }}
            >
              Register for Next Event
            </Link>
          ) : (
            <span
              className="text-white font-semibold inline-block w-full sm:w-auto text-center"
              style={{
                paddingLeft: 'var(--button-padding-x, 32px)',
                paddingRight: 'var(--button-padding-x, 32px)',
                paddingTop: 'var(--button-padding-y, 16px)',
                paddingBottom: 'var(--button-padding-y, 16px)',
                backgroundColor: '#1f1f1f',
                borderRadius: 'var(--border-radius, 8px)',
                opacity: 0.6,
                cursor: 'not-allowed',
              }}
            >
              Register for Next Event
            </span>
          )}
          <Link
            href="#events"
            className="font-semibold transition-all duration-200 w-full sm:w-auto text-center"
            style={{
              paddingLeft: 'var(--button-padding-x, 32px)',
              paddingRight: 'var(--button-padding-x, 32px)',
              paddingTop: 'var(--button-padding-y, 16px)',
              paddingBottom: 'var(--button-padding-y, 16px)',
              border: `1px solid var(--border-color, #374151)`,
              borderRadius: 'var(--border-radius, 8px)',
              color: 'var(--text-color, #ededed)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-color, #8b5cf6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color, #374151)';
            }}
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
