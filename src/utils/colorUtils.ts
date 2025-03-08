// Color conversion and contrast calculation utilities
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

export function rgbToHex(r: number, g: number, b: number): string {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

export function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  const l1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const l2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

export function getContrastScore(ratio: number): {
  score: number;
  label: string;
  stars: number;
  status: '🚨' | '⚠️' | '✅' | '🎯' | '🌟';
} {
  if (ratio < 2) return { score: 20, label: 'Poor', stars: 1, status: '🚨' };
  if (ratio < 3) return { score: 40, label: 'Fair', stars: 2, status: '⚠️' };
  if (ratio < 4.5) return { score: 60, label: 'Good', stars: 3, status: '✅' };
  if (ratio < 7) return { score: 80, label: 'Very Good', stars: 4, status: '🎯' };
  return { score: 100, label: 'Perfect', stars: 5, status: '🌟' };
}

export function findBestContrastColor(bgColor: string): string {
  const bg = hexToRgb(bgColor);
  const luminance = getLuminance(bg.r, bg.g, bg.b);
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}