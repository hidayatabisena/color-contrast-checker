import React from 'react';

interface PreviewCardProps {
  foregroundColor: string;
  backgroundColor: string;
}

export function PreviewCard({ foregroundColor, backgroundColor }: PreviewCardProps) {
  return (
    <div 
      className="rounded-lg p-4 sm:p-6 w-full h-full flex flex-col justify-between"
      style={{ backgroundColor, color: foregroundColor }}
    >
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Heading Title</h1>
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Subheading Title</h2>
        <p className="mb-4 text-sm sm:text-base">
          This is a sample paragraph to demonstrate how your text will look with the
          selected color combination. It includes different sizes and weights to help
          you evaluate readability.
        </p>

        <p className="mb-4 text-sm sm:text-base">
          Built with React+Vite, Typescript and Tailwind.
        </p>
      </div>
      <div className="space-y-3 sm:space-y-4 mt-auto">
        <button
          className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md font-medium text-sm sm:text-base"
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
            className="underline hover:opacity-80 transition-opacity text-xs sm:text-sm"
            style={{ color: foregroundColor }}
          >
            Learn more about WCAG contrast guidelines
          </a>
        </div>
      </div>
    </div>
  );
}