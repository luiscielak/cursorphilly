/**
 * CHANGELOG:
 * - Added "Next up" badge for first/featured event
 * - Featured event has stronger border/contrast
 * - Added event title: "Cursor Meetup Philly — [Month]"
 * - Added "Open in Google Maps ↗" link
 * - CTA changed to "RSVP on Luma ↗"
 * - Disabled CTA shows "Coming Soon" without external icon
 */

import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import eventsData from "@/data/events.json";
import { formatDate, getMonthName } from "@/utils/formatDate";

const EventsList = () => {
  const generateMapsUrl = (address: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  return (
    <section id="events" className="noise-bg py-16 px-6">
      {/* Section divider at top */}
      <div className="section-divider mb-12" />

      <div className="container max-w-4xl">
        <h2 className="text-section text-center mb-4 text-glow">
          Upcoming Events
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          Join us for hands-on workshops, lightning talks, and networking with fellow AI enthusiasts.
        </p>

        <div className="space-y-5">
          {eventsData.upcoming.map((event, index) => {
            const isFeatured = index === 0;
            const monthName = getMonthName(event.date);

            return (
              <article
                key={event.date}
                className={`card-elevated rounded-xl p-6 md:p-8 relative ${
                  isFeatured ? 'card-featured' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Featured badge */}
                {isFeatured && (
                  <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Next up
                  </span>
                )}

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div className="space-y-3">
                    {/* Event title */}
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      Cursor Meetup Philly — {monthName}
                    </h3>

                    <div className="flex items-center gap-3 text-primary">
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <span className="text-base font-medium text-foreground/90">
                        {event.day}, {formatDate(event.date)}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="p-2 rounded-lg bg-muted/30">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span className="text-foreground/80">{event.time}</span>
                    </div>

                    <div className="flex items-start gap-3 text-muted-foreground">
                      <div className="p-2 rounded-lg bg-muted/30 mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-foreground/90 font-medium">{event.venue}</p>
                        <p className="text-sm text-foreground/70">{event.address}</p>
                        <a
                          href={generateMapsUrl(event.address)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:text-primary/80 inline-flex items-center gap-1 mt-1 transition-colors"
                        >
                          Open in Google Maps
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    {event.lumaUrl ? (
                      <a
                        href={event.lumaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2 w-full md:w-auto justify-center"
                      >
                        RSVP on Luma
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="btn-disabled inline-flex items-center gap-2">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsList;
