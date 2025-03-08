import React from 'react';
import { Star } from 'lucide-react';
import { getContrastScore } from '../utils/colorUtils';

interface ContrastScoreProps {
  ratio: number;
}

export function ContrastScore({ ratio }: ContrastScoreProps) {
  const { score, label, stars, status } = getContrastScore(ratio);
  
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-2xl">{status}</span>
        <span className="font-medium">{label}</span>
        <span className="text-gray-600">({Math.round(score)}/100)</span>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={20}
            className={i <= stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
      <div className="text-sm space-y-1">
        <p>
          WCAG AA: {ratio >= 4.5 ? '✅ Pass' : '❌ Fail'} (min 4.5:1)
        </p>
        <p>
          WCAG AAA: {ratio >= 7 ? '✅ Pass' : '❌ Fail'} (min 7:1)
        </p>
      </div>
    </div>
  );
}