import { Mail, ArrowRight } from "lucide-react";

const NewsletterSignup = () => {
  return (
    <section className="section-elevated noise-bg py-20 px-6 relative overflow-hidden">
      {/* Section divider at top */}
      <div className="section-divider mb-4" />
      
      <div className="container max-w-2xl text-center relative z-10">
        <div className="icon-glow inline-flex items-center justify-center w-16 h-16 rounded-full mb-6">
          <Mail className="w-8 h-8 text-primary" />
        </div>

        <h2 className="text-section mb-4">
          Stay Updated
        </h2>

        <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
          Get notified about upcoming events, speaker announcements, and community highlights. 
          Plus, receive post-event recaps with key takeaways.
        </p>

        <a
          href="https://substack.com/@cursorphilly"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          Subscribe on Substack
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default NewsletterSignup;
