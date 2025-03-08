import React from 'react';
import { hexToRgb, rgbToHex } from '../utils/colorUtils';

interface ColorPickerProps {
  label: string;
  color: string;
  onChange: (color: string) => void;
}

export function ColorPicker({ label, color, onChange }: ColorPickerProps) {
  const rgb = hexToRgb(color);

  const handleRgbChange = (component: 'r' | 'g' | 'b', value: number) => {
    const newRgb = { ...rgb, [component]: value };
    onChange(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center gap-4">
        <input
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-20 rounded cursor-pointer"
        />
        <input
          type="text"
          value={color.toUpperCase()}
          onChange={(e) => onChange(e.target.value)}
          className="px-3 py-2 border rounded-md w-28 text-sm"
          placeholder="HEX"
        />
        <div className="flex gap-2">
          {(['r', 'g', 'b'] as const).map((component) => (
            <input
              key={component}
              type="number"
              min="0"
              max="255"
              value={rgb[component]}
              onChange={(e) => handleRgbChange(component, parseInt(e.target.value) || 0)}
              className="px-2 py-1 border rounded-md w-16 text-sm"
              placeholder={component.toUpperCase()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}