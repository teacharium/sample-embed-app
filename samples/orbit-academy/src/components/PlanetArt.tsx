/** Decorative ringed planet with orbiting moon, used on the start and end screens. */
export const PlanetArt = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 240 200"
    role="img"
    aria-label="A ringed planet with a small moon"
  >
    <defs>
      <radialGradient id="planet" cx="38%" cy="32%" r="70%">
        <stop offset="0%" stopColor="#fde68a" />
        <stop offset="55%" stopColor="#fb923c" />
        <stop offset="100%" stopColor="#db2777" />
      </radialGradient>
      <linearGradient id="ring" x1="0" x2="1">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
    </defs>
    <g className="planet-art__stars" fill="#fff">
      <circle cx="20" cy="30" r="2" />
      <circle cx="210" cy="24" r="2.5" />
      <circle cx="225" cy="150" r="1.8" />
      <circle cx="35" cy="165" r="1.5" />
      <circle cx="120" cy="14" r="1.6" />
    </g>
    <ellipse cx="120" cy="108" rx="104" ry="26" fill="none" stroke="url(#ring)" strokeWidth="10" opacity="0.45" transform="rotate(-14 120 108)" />
    <circle cx="120" cy="100" r="58" fill="url(#planet)" />
    <path d="M70 86 q50 -16 100 0" stroke="#fff" strokeOpacity="0.25" strokeWidth="7" fill="none" strokeLinecap="round" />
    <path d="M66 112 q54 14 108 0" stroke="#7c2d12" strokeOpacity="0.18" strokeWidth="8" fill="none" strokeLinecap="round" />
    <path
      d="M16 116 A104 26 -14 0 0 224 100"
      fill="none"
      stroke="url(#ring)"
      strokeWidth="10"
      strokeLinecap="round"
      transform="rotate(-14 120 108)"
    />
    <g className="planet-art__moon">
      <circle cx="205" cy="62" r="13" fill="#e0e7ff" />
      <circle cx="201" cy="58" r="3" fill="#c7d2fe" />
      <circle cx="209" cy="67" r="2" fill="#c7d2fe" />
    </g>
  </svg>
);
