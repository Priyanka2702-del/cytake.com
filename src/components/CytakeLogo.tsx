import Image from "next/image";

export default function CytakeLogo({ size = 44 }: { size?: number }) {
  const hasLogo = false; // 👈 false = SVG logo use hoga (dark theme me visible)

  if (hasLogo) {
    return (
      <Image
        src="/logo-removebg-preview.png"
        alt="Cytake Logo"
        width={size}
        height={size}
        style={{ objectFit: "contain" }}
      />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 260 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cArmGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0A1A6B" />
          <stop offset="35%" stopColor="#1240C0" />
          <stop offset="75%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#5B9EFF" />
        </linearGradient>

        <linearGradient id="cFront" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1C1C2E" />
          <stop offset="50%" stopColor="#0E0E1C" />
          <stop offset="100%" stopColor="#060608" />
        </linearGradient>

        <linearGradient id="cSide" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3A3A3A" />
          <stop offset="100%" stopColor="#161616" />
        </linearGradient>

        <linearGradient id="cBevel" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#484848" />
          <stop offset="100%" stopColor="#1E1E1E" />
        </linearGradient>

        <linearGradient id="cGloss" x1="0%" y1="0%" x2="40%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.16" />
          <stop offset="60%" stopColor="#fff" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="cArrow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1240C0" />
          <stop offset="55%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>

      {/* TOP ARM */}
      <path d="M 28,28  L 238,12  L 230,50  L 22,62  Z" fill="url(#cArmGrad)" />

      {/* BAR — top bevel */}
      <path d="M 10,42  L 28,28  L 68,16  L 50,32  Z" fill="url(#cBevel)" />

      {/* BAR — left side */}
      <path d="M 10,42  L 28,28  L 32,236  L 14,248  Z" fill="url(#cSide)" />

      {/* BAR — front face */}
      <path d="M 28,28  L 68,16  L 72,228  L 32,236  Z" fill="url(#cFront)" />

      {/* BAR — gloss */}
      <path d="M 28,28  L 68,16  L 72,228  L 32,236  Z" fill="url(#cGloss)" />

      {/* BOTTOM ARM */}
      <path d="M 18,202  L 176,192  L 170,228  L 14,236  Z" fill="url(#cArmGrad)" />

      {/* TRADING ARROW */}
      <polyline
        points="95,218 116,242 148,182 166,200 208,118 234,78"
        fill="none"
        stroke="url(#cArrow)"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Arrowhead */}
      <polygon points="234,78 208,74 220,98" fill="#3B82F6" />
      <polygon points="234,78 232,104 212,90" fill="#60A5FA" />
    </svg>
  );
}