'use client';

export default function NewsletterSignup() {
  const substackUrl = "https://substack.com/@cursorphilly";

  return (
    <section className="px-4 dither" style={{ 
      paddingTop: 'var(--section-padding, 80px)', 
      paddingBottom: 'var(--section-padding, 80px)',
      backgroundColor: '#1f1f1f'
    }}>
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-bold mb-4 text-3xl sm:text-4xl md:text-5xl" style={{ 
          fontSize: 'var(--section-title-size, clamp(32px, 5vw, 48px))',
          color: 'var(--text-color, #ededed)'
        }}>
          Stay Updated
        </h2>
        <p className="text-lg mb-8" style={{ color: 'var(--text-color, #ededed)', opacity: 0.6 }}>
          Get event updates, recaps, and community news delivered to your inbox.
        </p>
        <a
          href={substackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white font-semibold transition-all duration-200 transform w-full sm:w-auto"
          style={{
            paddingLeft: 'var(--button-padding-x, 32px)',
            paddingRight: 'var(--button-padding-x, 32px)',
            paddingTop: 'var(--button-padding-y, 16px)',
            paddingBottom: 'var(--button-padding-y, 16px)',
            backgroundColor: 'var(--accent-color, #8b5cf6)',
            borderRadius: 'var(--border-radius, 8px)',
            transform: 'scale(1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = `scale(var(--button-hover-scale, 1.05))`;
            e.currentTarget.style.filter = 'brightness(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.filter = 'brightness(1)';
          }}
        >
          Subscribe on Substack
        </a>
        <p className="text-sm mt-4" style={{ color: 'var(--text-color, #ededed)', opacity: 0.5 }}>
          📰 Cursor Philly
        </p>
      </div>
    </section>
  );
}
