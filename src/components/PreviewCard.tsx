import React from 'react';

interface PreviewCardProps {
  foregroundColor: string;
  backgroundColor: string;
}

export function PreviewCard({ foregroundColor, backgroundColor }: PreviewCardProps) {
  return (
    <div 
      className="rounded-lg p-6 w-full max-w-md"
      style={{ backgroundColor, color: foregroundColor }}
    >
      <h1 className="text-3xl font-bold mb-4">Preview Heading</h1>
      <h2 className="text-xl font-semibold mb-3">Subheading Example</h2>
      <p className="mb-4">
        This is a sample paragraph to demonstrate how your text will look with the
        selected color combination. It includes different sizes and weights to help
        you evaluate readability.
      </p>
      <div className="space-y-4">
        <button
          className="px-4 py-2 rounded-md font-medium"
          style={{ 
            backgroundColor: foregroundColor,
            color: backgroundColor,
          }}
        >
          Sample Button
        </button>
        <div>
          <a
            href="https://www.wcag.com/solutions/why-contrast-checkers-matter-for-web-accessibility/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity"
            style={{ color: foregroundColor }}
          >
            Learn more about WCAG contrast guidelines
          </a>
        </div>
      </div>
    </div>
  );
}