import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import { ColorPicker } from './components/ColorPicker';
import { PreviewCard } from './components/PreviewCard';
import { ContrastScore } from './components/ContrastScore';
import { SponsorBox } from './components/SponsorBox';
import { getContrastRatio, findBestContrastColor } from './utils/colorUtils';

function App() {
  const [foreground, setForeground] = useState('#000000');
  const [background, setBackground] = useState('#FFFFFF');

  const contrastRatio = getContrastRatio(foreground, background);

  const copyColor = async (color: string) => {
    await navigator.clipboard.writeText(color);
  };

  const autoAdjust = () => {
    setForeground(findBestContrastColor(background));
  };

  return (
    <div className="min-h-screen bg-gray-50 [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <header className="text-center">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 mb-1 sm:mb-2">
              Color Contrast Checker
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 px-1">
              Ensure your colors meet WCAG accessibility standards
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-3 sm:gap-6">
            <div className="space-y-3 sm:space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-2 sm:p-4 md:p-6">
                <div className="space-y-2 sm:space-y-4 mb-3 sm:mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                    <div>
                      <h3 className="text-sm sm:text-base font-medium">Contrast Ratio</h3>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold">
                        {contrastRatio.toFixed(2)}:1
                      </p>
                    </div>
                    <button
                      onClick={autoAdjust}
                      className="px-2 py-1.5 sm:px-3 sm:py-2 bg-purple-600 text-white text-xs sm:text-sm rounded-md hover:bg-purple-700 transition-colors w-full sm:w-auto"
                    >
                      Auto-Adjust Colors
                    </button>
                  </div>
                  
                  <ContrastScore ratio={contrastRatio} />

                  <div className="grid grid-cols-2 gap-1 sm:gap-2 sm:flex sm:flex-wrap sm:gap-3">
                    <button
                      onClick={() => copyColor(foreground)}
                      className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 px-1.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm border rounded-md hover:bg-gray-50"
                    >
                      <Copy size={12} className="sm:w-4 sm:h-4" /> Copy Foreground
                    </button>
                    <button
                      onClick={() => copyColor(background)}
                      className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 px-1.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm border rounded-md hover:bg-gray-50"
                    >
                      <Copy size={12} className="sm:w-4 sm:h-4" /> Copy Background
                    </button>
                  </div>
                </div>

                <div className="border-t pt-3 sm:pt-6">
                  <ColorPicker
                    label="Foreground (Text) Color"
                    color={foreground}
                    onChange={setForeground}
                  />
                  <div className="mt-2 sm:mt-4">
                    <ColorPicker
                      label="Background Color"
                      color={background}
                      onChange={setBackground}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-2 sm:p-4 md:p-6">
                <h2 className="text-sm sm:text-base md:text-lg font-medium mb-2 sm:mb-4">Live Preview</h2>
                <PreviewCard
                  foregroundColor={foreground}
                  backgroundColor={background}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SponsorBox />
    </div>
  );
}

export default App;