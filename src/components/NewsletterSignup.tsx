import { Mail, ArrowRight } from "lucide-react";

const NewsletterSignup = () => {
  return (
    <section className="section-elevated noise-bg pt-12 pb-20 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute w-[600px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(262 83% 66% / 0.2) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Section divider at top */}
      <div className="section-divider mb-10" />
      
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
