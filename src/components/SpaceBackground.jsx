function seededStars(count) {
  const stars = []
  let seed = 42
  const next = () => {
    seed = (seed * 16807) % 2147483647
    return seed / 2147483647
  }

  for (let i = 0; i < count; i += 1) {
    const sparkle = next() > 0.88
    stars.push({
      id: i,
      left: `${next() * 100}%`,
      top: `${next() * 100}%`,
      size: sparkle ? next() * 8 + 7 : next() * 2 + 0.5,
      opacity: next() * 0.65 + 0.2,
      delay: `${next() * 5}s`,
      purple: next() > 0.72,
      sparkle,
    })
  }

  return stars
}

const STARS = seededStars(220)

export default function SpaceBackground() {
  return (
    <div className="space-bg" aria-hidden="true">
      <div className="space-bg__nebula" />
      <div className="space-bg__grain" />
      {STARS.map((star) => (
        <span
          key={star.id}
          className={`space-bg__star${star.purple ? ' is-purple' : ''}${star.sparkle ? ' is-sparkle' : ''}`}
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: star.delay,
          }}
        />
      ))}

      <svg className="space-bg__orbits" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="orbit-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="orbit-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e9d5ff" stopOpacity="0.15" />
            <stop offset="45%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <ellipse
          cx="1080"
          cy="400"
          rx="210"
          ry="300"
          stroke="url(#orbit-stroke)"
          strokeWidth="1.6"
          filter="url(#orbit-glow)"
        />
        <ellipse
          cx="1060"
          cy="410"
          rx="250"
          ry="340"
          stroke="#c084fc"
          strokeWidth="1.1"
          opacity="0.55"
          filter="url(#orbit-glow)"
        />
        <ellipse
          cx="640"
          cy="560"
          rx="980"
          ry="250"
          stroke="#a855f7"
          strokeWidth="1.15"
          transform="rotate(-22 640 560)"
          filter="url(#orbit-glow)"
          opacity="0.7"
        />
        <ellipse
          cx="700"
          cy="480"
          rx="1100"
          ry="310"
          stroke="#d8b4fe"
          strokeWidth="0.7"
          transform="rotate(-32 700 480)"
          opacity="0.28"
        />
        <g fill="#f3e8ff" filter="url(#orbit-glow)">
          <path d="M1220 150 L1225 163 L1238 168 L1225 173 L1220 186 L1215 173 L1202 168 L1215 163 Z" />
          <path d="M1320 430 L1323 438 L1331 441 L1323 444 L1320 452 L1317 444 L1309 441 L1317 438 Z" />
          <path d="M180 240 L184 250 L194 254 L184 258 L180 268 L176 258 L166 254 L176 250 Z" />
          <path d="M420 720 L423 727 L430 730 L423 733 L420 740 L417 733 L410 730 L417 727 Z" />
        </g>
      </svg>

      <svg className="space-bg__planet" viewBox="0 0 400 400">
        <defs>
          <radialGradient id="planet-sphere" cx="38%" cy="32%" r="70%">
            <stop offset="0%" stopColor="#6b7280" />
            <stop offset="42%" stopColor="#2a3140" />
            <stop offset="78%" stopColor="#11131a" />
            <stop offset="100%" stopColor="#050608" />
          </radialGradient>
          <radialGradient id="planet-atmos" cx="50%" cy="50%" r="50%">
            <stop offset="72%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="88%" stopColor="#7c3aed" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.08" />
          </radialGradient>
          <filter id="planet-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="4" seed="7" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.25  0 0 0 0 0.28  0 0 0 0 0.35  0 0 0 0.55 0" />
          </filter>
          <clipPath id="planet-clip">
            <circle cx="200" cy="200" r="168" />
          </clipPath>
        </defs>
        <circle cx="200" cy="200" r="188" fill="url(#planet-atmos)" />
        <circle cx="200" cy="200" r="168" fill="url(#planet-sphere)" />
        <g clipPath="url(#planet-clip)">
          <rect width="400" height="400" filter="url(#planet-noise)" opacity="0.45" />
          <path
            fill="#1c2230"
            opacity="0.85"
            d="M70 150c30-40 80-30 110-18 28 12 48-20 82-8 26 10 40 38 22 58-22 24-70 8-96 28-30 22-18 58-52 64-40 8-78-18-90-48-10-26 4-52 24-76Z"
          />
          <path
            fill="#161b26"
            opacity="0.9"
            d="M210 220c36-8 70 6 96 28 18 16 38 14 52 36-8 28-46 34-78 28-40-8-48-40-80-48-22-6-34-28-20-40 10-8 18-6 30-4Z"
          />
          <path
            fill="#3a4254"
            opacity="0.35"
            d="M120 90c40-20 90-10 118 18 8 22-18 30-40 34-28 6-58-4-78-22-12-12-12-22 0-30Z"
          />
          <g stroke="#c4b5fd" strokeWidth="0.6" fill="none" opacity="0.28">
            <ellipse cx="200" cy="200" rx="168" ry="40" />
            <ellipse cx="200" cy="200" rx="168" ry="90" />
            <ellipse cx="200" cy="200" rx="168" ry="138" />
            <ellipse cx="200" cy="200" rx="55" ry="168" />
            <ellipse cx="200" cy="200" rx="110" ry="168" />
            <line x1="32" y1="200" x2="368" y2="200" />
          </g>
        </g>
      </svg>
    </div>
  )
}
