/**
 * CHANGELOG:
 * - Replaced simple block with credibility stats
 * - Added 3 stats: attendees, lightning talks, hosted at
 * - Kept "View past events on Luma" button
 */

import { ExternalLink, Users, Mic, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: Users,
    value: "250+",
    label: "members",
  },
  {
    icon: Mic,
    value: "10+",
    label: "lightning talks",
  },
  {
    icon: MapPin,
    value: "Indy Hall",
    label: "hosted at",
  },
];

const PastEvents = () => {
  return (
    <section className="noise-bg py-14 px-6">
      <div className="container max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Our Community
        </h2>

        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8 max-w-lg mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-2">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xl md:text-2xl font-semibold text-foreground">{stat.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline">
            <a
              href="https://luma.com/cursorcommunity?k=c&tag=philadelphia&period=past"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              View past events on Luma
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
