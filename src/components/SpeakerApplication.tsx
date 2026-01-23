import { Mic, Check, ArrowRight } from "lucide-react";

const topics = [
  "Cursor workflows and best practices",
  "Integration with other tools (MCPs, APIs, etc.)",
  "Real-world projects built with Cursor",
  "Tips for teams using Cursor",
  "Creative and unexpected use cases",
];

const SpeakerApplication = () => {
  return (
    <section className="noise-bg py-20 px-6">
      {/* Section divider at top */}
      <div className="section-divider mb-16" />
      
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <div className="icon-glow inline-flex items-center justify-center w-16 h-16 rounded-full mb-6">
            <Mic className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-section mb-4">
            Interested in Speaking?
          </h2>

          <p className="text-lg text-muted-foreground">
            We're always looking for community members to share their Cursor experiences, 
            tips, and projects. Whether you're a beginner or expert, all perspectives are welcome.
          </p>
        </div>

        <div className="card-elevated rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-6">
            What We're Looking For
          </h3>

          <ul className="space-y-4 mb-8">
            {topics.map((topic) => (
              <li key={topic} className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-primary/20 border border-primary/30 mt-0.5 flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-muted-foreground">{topic}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-muted-foreground mb-8 p-4 glass-card rounded-lg">
            Talks are typically 10-15 minutes plus a brief Q&A. We're happy to help you prepare 
            and can provide feedback on your talk outline.
          </p>

          <a
            href="https://airtable.com/apprurx4zp32qn1nS/pagtDHZ13ksL44O6C/form"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full inline-flex items-center justify-center gap-2"
          >
            Apply to Speak
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpeakerApplication;
