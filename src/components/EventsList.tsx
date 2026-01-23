import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import eventsData from "@/data/events.json";
import { formatDate } from "@/utils/formatDate";

const EventsList = () => {
  return (
    <section id="events" className="noise-bg py-20 px-6">
      <div className="container max-w-4xl">
        <h2 className="text-section text-center mb-12">
          Upcoming Events
        </h2>

        <div className="space-y-6">
          {eventsData.upcoming.map((event, index) => (
            <article
              key={event.date}
              className="card-noise bg-card rounded-xl border border-border p-6 md:p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary">
                    <Calendar className="w-5 h-5" />
                    <span className="text-lg font-medium">
                      {event.day}, {formatDate(event.date)}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">{event.venue}</p>
                      <p className="text-sm">{event.address}</p>
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
                      View on Luma
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsList;
