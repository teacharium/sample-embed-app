/** Decorative animated atom for the start screen. */
export const AtomArt = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    role="img"
    aria-label="An atom with orbiting electrons"
  >
    <defs>
      <radialGradient id="lumen-core" cx="40%" cy="35%" r="70%">
        <stop offset="0%" stopColor="#f2ffc2" />
        <stop offset="60%" stopColor="#c6f432" />
        <stop offset="100%" stopColor="#6d8f00" />
      </radialGradient>
    </defs>
    <g fill="none" strokeWidth="2.5" opacity="0.85">
      <ellipse cx="100" cy="100" rx="82" ry="30" stroke="#8b5cf6" />
      <ellipse
        cx="100"
        cy="100"
        rx="82"
        ry="30"
        stroke="#7dd3fc"
        transform="rotate(60 100 100)"
      />
      <ellipse
        cx="100"
        cy="100"
        rx="82"
        ry="30"
        stroke="#f472b6"
        transform="rotate(-60 100 100)"
      />
    </g>
    <circle cx="100" cy="100" r="18" fill="url(#lumen-core)" />
    <g className="atom-art__electron atom-art__electron--a">
      <circle cx="182" cy="100" r="6" fill="#8b5cf6" />
    </g>
    <g className="atom-art__electron atom-art__electron--b">
      <circle cx="182" cy="100" r="6" fill="#7dd3fc" />
    </g>
    <g className="atom-art__electron atom-art__electron--c">
      <circle cx="182" cy="100" r="6" fill="#f472b6" />
    </g>
  </svg>
);
