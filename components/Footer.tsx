'use client';

export default function Footer() {
  const links = {
    luma: "https://luma.com/cursorcommunity?k=c&tag=philadelphia",
    linkedin: "https://www.linkedin.com/groups/13297520/",
    substack: "https://substack.com/@cursorphilly",
    discord: "https://discord.gg/qXPAZNRR3T"
  };

  return (
    <footer className="py-12 px-4" style={{ 
      borderTop: `1px solid var(--border-color, #374151)`
    }}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-color, #ededed)' }}>Cursor Meetup Philadelphia</h3>
            <p className="text-sm" style={{ color: 'var(--text-color, #ededed)', opacity: 0.6 }}>
              A community gathering for developers exploring AI-powered development tools.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href={links.luma}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: 'var(--text-color, #ededed)', opacity: 0.6 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-color, #8b5cf6)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-color, #ededed)';
                e.currentTarget.style.opacity = '0.6';
              }}
            >
              Luma
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: 'var(--text-color, #ededed)', opacity: 0.6 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-color, #8b5cf6)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-color, #ededed)';
                e.currentTarget.style.opacity = '0.6';
              }}
            >
              LinkedIn
            </a>
            <a
              href={links.substack}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: 'var(--text-color, #ededed)', opacity: 0.6 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-color, #8b5cf6)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-color, #ededed)';
                e.currentTarget.style.opacity = '0.6';
              }}
            >
              Substack
            </a>
            <a
              href={links.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: 'var(--text-color, #ededed)', opacity: 0.6 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-color, #8b5cf6)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-color, #ededed)';
                e.currentTarget.style.opacity = '0.6';
              }}
            >
              Discord
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center text-sm" style={{ 
          borderTop: `1px solid var(--border-color, #374151)`,
          color: 'var(--text-color, #ededed)',
          opacity: 0.5
        }}>
          <p>© {new Date().getFullYear()} Cursor Meetup Philadelphia. All rights reserved.</p>
          <p className="mt-2">
            Presented by{' '}
            <a
              href="https://cursor.com/community"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: 'var(--accent-color, #8b5cf6)' }}
            >
              Cursor Community
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
