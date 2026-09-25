// Generates a small deterministic SVG "photo" placeholder from a seed string,
// so the UI never depends on external image hosts. Swap PhotoFrame's
// rendering for real <img> sources once real photos exist — see
// components/PhotoFrame.tsx.

const PALETTES: [string, string][] = [
  ["#3c2f22", "#e3b24c"],
  ["#3a1e1c", "#b0473f"],
  ["#22271f", "#8ea06a"],
  ["#241f2e", "#8a7bb0"],
  ["#2a2214", "#c98a3f"],
  ["#1c2630", "#5d95a8"],
];

export function hashSeed(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

export function avatarDataUri(seed: string, label: string): string {
  const h = hashSeed(seed);
  const [bg, fg] = PALETTES[h % PALETTES.length];
  const angle = h % 360;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500">
    <defs>
      <linearGradient id="g" gradientTransform="rotate(${angle})">
        <stop offset="0%" stop-color="${bg}" />
        <stop offset="100%" stop-color="${bg}cc" />
      </linearGradient>
    </defs>
    <rect width="400" height="500" fill="url(#g)" />
    <circle cx="${80 + (h % 240)}" cy="${60 + (h % 120)}" r="140" fill="${fg}" opacity="0.14" />
    <text x="50%" y="53%" text-anchor="middle" font-family="Georgia, serif" font-size="120" fill="${fg}" opacity="0.9">${initials(
      label
    )}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
