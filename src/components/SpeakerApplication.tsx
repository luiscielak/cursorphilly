/**
 * CHANGELOG:
 * - Added "Talks are typically 10–15 minutes plus brief Q&A."
 * - Added "First-time speakers welcome."
 * - Added secondary text link: "Suggest a speaker"
 */

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
    <section className="noise-bg py-16 px-6">
      {/* Section divider at top */}
      <div className="section-divider mb-12" />

      <div className="container max-w-2xl">
        <div className="text-center mb-8">
          <div className="icon-glow inline-flex items-center justify-center w-14 h-14 rounded-full mb-5">
            <Mic className="w-7 h-7 text-primary" />
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Interested in Speaking?
          </h2>

          <p className="text-base md:text-lg text-muted-foreground">
            We're always looking for community members to share their Cursor experiences,
            tips, and projects. Whether you're a beginner or expert, all perspectives are welcome.
          </p>
        </div>

        <div className="card-elevated rounded-xl p-6 md:p-8">
          <h3 className="text-lg font-semibold mb-5">
            What We're Looking For
          </h3>

          <ul className="space-y-3 mb-6">
            {topics.map((topic) => (
              <li key={topic} className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-primary/20 border border-primary/30 mt-0.5 flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-foreground/80 text-sm md:text-base">{topic}</span>
              </li>
            ))}
          </ul>

          <div className="text-sm text-muted-foreground mb-6 p-4 glass-card rounded-lg space-y-2">
            <p>Talks are typically 10–15 minutes plus brief Q&A.</p>
            <p className="text-primary/90 font-medium">First-time speakers welcome.</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <a
              href="https://airtable.com/apprurx4zp32qn1nS/pagtDHZ13ksL44O6C/form"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full inline-flex items-center justify-center gap-2"
            >
              Apply to speak
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:cursormeetup@gmail.com?subject=Speaker%20Suggestion"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Suggest a speaker
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerApplication;
