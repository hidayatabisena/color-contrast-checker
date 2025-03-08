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
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <header className="text-center">
            <h1 className="text-6xl font-extrabold text-gray-900 mb-2">
              Color Contrast Checker
            </h1>
            <p className="text-gray-600">
              Ensure your colors meet WCAG accessibility standards
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Contrast Ratio</h3>
                      <p className="text-2xl font-bold">
                        {contrastRatio.toFixed(2)}:1
                      </p>
                    </div>
                    <button
                      onClick={autoAdjust}
                      className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                    >
                      Auto-Adjust Colors
                    </button>
                  </div>
                  
                  <ContrastScore ratio={contrastRatio} />

                  <div className="flex gap-4">
                    <button
                      onClick={() => copyColor(foreground)}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md hover:bg-gray-50"
                    >
                      <Copy size={16} /> Copy Foreground
                    </button>
                    <button
                      onClick={() => copyColor(background)}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md hover:bg-gray-50"
                    >
                      <Copy size={16} /> Copy Background
                    </button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <ColorPicker
                    label="Foreground (Text) Color"
                    color={foreground}
                    onChange={setForeground}
                  />
                  <div className="mt-4">
                    <ColorPicker
                      label="Background Color"
                      color={background}
                      onChange={setBackground}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-lg font-medium mb-4">Live Preview</h2>
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