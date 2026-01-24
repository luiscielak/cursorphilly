/**
 * CHANGELOG:
 * - Updated copy with clearer value proposition
 * - Added "via Substack" subtext under button
 */

import { Mail, ArrowRight } from "lucide-react";

const NewsletterSignup = () => {
  return (
    <section className="section-elevated noise-bg py-16 px-6 relative overflow-hidden">
      {/* Section divider at top */}
      <div className="section-divider mb-4" />

      <div className="container max-w-2xl text-center relative z-10">
        <div className="icon-glow inline-flex items-center justify-center w-14 h-14 rounded-full mb-5">
          <Mail className="w-7 h-7 text-primary" />
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Stay Updated
        </h2>

        <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-md mx-auto">
          Get notified about upcoming events, speaker announcements, and community recaps with key takeaways.
        </p>

        <div className="flex flex-col items-center gap-2">
          <a
            href="https://substack.com/@cursorphilly"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Subscribe on Substack
            <ArrowRight className="w-4 h-4" />
          </a>
          <span className="text-xs text-muted-foreground">via Substack</span>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
