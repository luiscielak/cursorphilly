'use client';

export default function SpeakerApplication() {
  const airtableFormUrl = "https://airtable.com/apprurx4zp32qn1nS/pagtDHZ13ksL44O6C/form";

  return (
    <section className="px-4" style={{ 
      paddingTop: 'var(--section-padding, 80px)', 
      paddingBottom: 'var(--section-padding, 80px)'
    }}>
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-bold mb-6 text-center text-3xl sm:text-4xl md:text-5xl" style={{ 
          fontSize: 'var(--section-title-size, clamp(32px, 5vw, 48px))',
          color: 'var(--text-color, #ededed)'
        }}>
          Interested in Speaking?
        </h2>
        <p className="text-lg mb-8 text-center max-w-2xl mx-auto" style={{ color: 'var(--text-color, #ededed)', opacity: 0.6 }}>
          We're always looking for community members to share their Cursor experiences, 
          tips, and projects. Whether you're a beginner or expert, all perspectives are welcome.
        </p>
        <div className="p-8 dither relative" style={{
          backgroundColor: '#1f1f1f',
          borderRadius: 'var(--border-radius, 8px)',
          border: `1px solid var(--border-color, #374151)`
        }}>
          <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text-color, #ededed)' }}>What We're Looking For</h3>
          <ul className="space-y-3 mb-8" style={{ color: 'var(--text-color, #ededed)', opacity: 0.7 }}>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: 'var(--accent-color, #8b5cf6)' }}>•</span>
              <span>Cursor workflows and best practices</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: 'var(--accent-color, #8b5cf6)' }}>•</span>
              <span>Integration with other tools (MCPs, APIs, etc.)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: 'var(--accent-color, #8b5cf6)' }}>•</span>
              <span>Real-world projects built with Cursor</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: 'var(--accent-color, #8b5cf6)' }}>•</span>
              <span>Tips for teams using Cursor</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: 'var(--accent-color, #8b5cf6)' }}>•</span>
              <span>Creative and unexpected use cases</span>
            </li>
          </ul>
          <p className="text-sm mb-6" style={{ color: 'var(--text-color, #ededed)', opacity: 0.6 }}>
            Talks are typically 10-15 minutes plus a brief Q&A. We're happy to help you prepare 
            and can provide feedback on your talk outline.
          </p>
          <a
            href={airtableFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white font-semibold transition-all duration-200 transform w-full text-center"
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
            Apply to Speak
          </a>
        </div>
      </div>
    </section>
  );
}
