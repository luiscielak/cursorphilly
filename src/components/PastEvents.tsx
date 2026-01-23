import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const PastEvents = () => {
  return (
    <section className="noise-bg pt-16 pb-8 px-6">
      <div className="container max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Past Meetups
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Check out our previous community gatherings and see what you missed!
        </p>
        <Button asChild>
          <a 
            href="https://luma.com/cursorcommunity?k=c&tag=philadelphia&period=past" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Past Events on Luma
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default PastEvents;
