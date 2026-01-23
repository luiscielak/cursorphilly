import { Users, Sparkles } from "lucide-react";
import eventsData from "@/data/events.json";
import { formatDate } from "@/utils/formatDate";
import type { PastEvent } from "@/types/events";

const PastEvents = () => {
  const pastEvents = eventsData.past as PastEvent[];

  if (!pastEvents || pastEvents.length === 0) {
    return null;
  }

  return (
    <section className="noise-bg py-20 px-6">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Past Meetups
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A look back at our community gatherings. Join us at the next one!
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pastEvents.map((event, index) => (
            <article
              key={index}
              className="card-surface rounded-lg p-6 border border-border"
            >
              <div className="mb-4">
                <time className="text-lg font-semibold text-foreground">
                  {formatDate(event.date)}
                </time>
                <p className="text-sm text-muted-foreground">
                  {event.day} · {event.time}
                </p>
              </div>

              <div className="flex items-center gap-2 text-primary mb-4">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">{event.attendees} attendees</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Highlights</span>
                </div>
                <ul className="space-y-1">
                  {event.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground pl-6">
                      • {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
