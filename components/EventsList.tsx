'use client';

import Link from 'next/link';
import eventsData from '@/data/events.json';

export default function EventsList() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section id="events" className="px-4" style={{ paddingTop: 'var(--section-padding, 80px)', paddingBottom: 'var(--section-padding, 80px)' }}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-bold mb-12 text-center text-3xl sm:text-4xl md:text-5xl" style={{ 
          fontSize: 'var(--section-title-size, clamp(32px, 5vw, 48px))',
          color: 'var(--text-color, #ededed)'
        }}>
          Upcoming Events
        </h2>
        <div className="space-y-6">
          {eventsData.upcoming.map((event, index) => (
            <div
              key={index}
              className="p-6 transition-all duration-200 dither relative z-10"
              style={{
                border: `1px solid var(--border-color, #374151)`,
                borderRadius: 'var(--border-radius, 8px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-color, #8b5cf6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color, #374151)';
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="text-sm mb-2" style={{ color: 'var(--accent-color, #8b5cf6)' }}>
                    {event.day}, {formatDate(event.date)}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-color, #ededed)' }}>{event.venue}</h3>
                  <p className="mb-1" style={{ color: 'var(--text-color, #ededed)', opacity: 0.6 }}>{event.address}</p>
                  <p className="text-sm" style={{ color: 'var(--text-color, #ededed)', opacity: 0.5 }}>{event.time}</p>
                </div>
                {event.lumaUrl ? (
                  <Link
                    href={event.lumaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold transition-all duration-200 inline-block text-center transform w-full sm:w-auto"
                    style={{
                      paddingLeft: 'var(--button-padding-x, 32px)',
                      paddingRight: 'var(--button-padding-x, 32px)',
                      paddingTop: 'var(--button-padding-y, 16px)',
                      paddingBottom: 'var(--button-padding-y, 16px)',
                      backgroundColor: 'var(--accent-color, #8b5cf6)',
                      borderRadius: 'var(--border-radius, 8px)',
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
                    View on Luma
                  </Link>
                ) : (
                  <span className="font-semibold inline-block text-center w-full sm:w-auto" style={{
                    paddingLeft: 'var(--button-padding-x, 32px)',
                    paddingRight: 'var(--button-padding-x, 32px)',
                    paddingTop: 'var(--button-padding-y, 16px)',
                    paddingBottom: 'var(--button-padding-y, 16px)',
                    backgroundColor: '#1f1f1f',
                    borderRadius: 'var(--border-radius, 8px)',
                    color: 'var(--text-color, #ededed)',
                    opacity: 0.6
                  }}>
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
