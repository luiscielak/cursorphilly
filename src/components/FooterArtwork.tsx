/**
 * Footer artwork: Philadelphia skyline + tech/AI motif.
 * Uses CSS variables so it stays on-theme (dark bg, purple accent).
 */
const FooterArtwork = () => (
  <div
    className="relative w-full overflow-hidden"
    style={{ height: "clamp(80px, 12vw, 140px)" }}
    aria-hidden
  >
    <svg
      viewBox="0 0 1200 120"
      className="absolute inset-0 h-full w-full object-cover object-bottom"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="footer-glow"
          x1="0%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop offset="0%" stopColor="hsl(var(--background))" />
          <stop offset="40%" stopColor="hsl(262 83% 66% / 0.08)" />
          <stop offset="100%" stopColor="hsl(262 83% 66% / 0.02)" />
        </linearGradient>
        <linearGradient
          id="footer-skyline"
          x1="0%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop offset="0%" stopColor="hsl(var(--muted-foreground) / 0.5)" />
          <stop offset="100%" stopColor="hsl(var(--muted-foreground) / 0.15)" />
        </linearGradient>
      </defs>

      {/* Soft purple glow along bottom */}
      <rect
        x="0"
        y="0"
        width="1200"
        height="120"
        fill="url(#footer-glow)"
      />

      {/* Philadelphia-inspired skyline (stylized: towers suggest Comcast / Liberty Place) */}
      <path
        fill="url(#footer-skyline)"
        d="M0,120 L0,120 L30,120 L30,95 L55,95 L55,110 L85,110 L85,88 L115,88 L115,120 L145,120 L145,100 L175,100 L175,120 L210,120 L210,78 L250,78 L250,120 L290,120 L290,65 L330,65 L330,120 L370,120 L370,55 L410,55 L410,120 L450,120 L450,48 L500,48 L500,120 L550,120 L550,42 L600,42 L600,120 L650,120 L650,50 L700,50 L700,120 L750,120 L750,58 L800,58 L800,120 L840,120 L840,68 L880,68 L880,120 L920,120 L920,62 L960,62 L960,120 L1000,120 L1000,72 L1040,72 L1040,120 L1080,120 L1080,55 L1120,55 L1120,120 L1160,120 L1160,90 L1200,90 L1200,120 Z"
      />

      {/* Subtle grid / circuit lines (tech motif) */}
      <g stroke="hsl(var(--primary) / 0.12)" strokeWidth="0.5" fill="none">
        <path d="M0,60 L1200,60" />
        <path d="M0,80 L1200,80" />
        <path d="M200,0 L200,120" />
        <path d="M600,0 L600,120" />
        <path d="M1000,0 L1000,120" />
      </g>

      {/* Accent dots (nodes / community) */}
      <circle cx="200" cy="70" r="1.5" fill="hsl(var(--primary) / 0.4)" />
      <circle cx="600" cy="75" r="1.5" fill="hsl(var(--primary) / 0.35)" />
      <circle cx="1000" cy="68" r="1.5" fill="hsl(var(--primary) / 0.4)" />
    </svg>
  </div>
);

export default FooterArtwork;
