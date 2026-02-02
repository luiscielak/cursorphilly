'use client';

import { useControls } from 'leva';
import { useEffect } from 'react';

export default function UIControls() {
  const {
    // Colors
    accentColor,
    backgroundColor,
    textColor,
    gradientFrom,
    gradientVia,
    gradientTo,
    
    // Typography
    heroTitleSize,
    heroSubtitleSize,
    sectionTitleSize,
    
    // Spacing
    heroPadding,
    sectionPadding,
    buttonPaddingX,
    buttonPaddingY,
    
    // Effects
    ditherOpacity,
    buttonShadowIntensity,
    buttonHoverScale,
    
    // Border
    borderColor,
    borderRadius,
  } = useControls({
    // Colors
    accentColor: { value: '#8b5cf6', label: 'Accent Color' },
    backgroundColor: { value: '#0a0a0a', label: 'Background Color' },
    textColor: { value: '#ededed', label: 'Text Color' },
    gradientFrom: { value: '#ffffff', label: 'Gradient From' },
    gradientVia: { value: '#c4b5fd', label: 'Gradient Via' },
    gradientTo: { value: '#a78bfa', label: 'Gradient To' },
    
    // Typography
    heroTitleSize: { value: 96, min: 32, max: 200, step: 4, label: 'Hero Title Size (px)' },
    heroSubtitleSize: { value: 32, min: 16, max: 80, step: 2, label: 'Hero Subtitle Size (px)' },
    sectionTitleSize: { value: 48, min: 24, max: 120, step: 4, label: 'Section Title Size (px)' },
    
    // Spacing
    heroPadding: { value: 80, min: 20, max: 200, step: 4, label: 'Hero Padding (px)' },
    sectionPadding: { value: 80, min: 20, max: 200, step: 4, label: 'Section Padding (px)' },
    buttonPaddingX: { value: 32, min: 8, max: 64, step: 4, label: 'Button Padding X (px)' },
    buttonPaddingY: { value: 16, min: 8, max: 32, step: 2, label: 'Button Padding Y (px)' },
    
    // Effects
    ditherOpacity: { value: 0.6, min: 0, max: 1, step: 0.05, label: 'Dither Opacity' },
    buttonShadowIntensity: { value: 0.2, min: 0, max: 1, step: 0.05, label: 'Button Shadow Intensity' },
    buttonHoverScale: { value: 1.05, min: 1, max: 1.2, step: 0.01, label: 'Button Hover Scale' },
    
    // Border
    borderColor: { value: '#374151', label: 'Border Color' },
    borderRadius: { value: 8, min: 0, max: 32, step: 2, label: 'Border Radius (px)' },
  });

  // Convert hex to rgba for dither effect
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Apply CSS variables to the document
  useEffect(() => {
    const root = document.documentElement;
    
    // Colors
    root.style.setProperty('--accent-color', accentColor);
    root.style.setProperty('--background-color', backgroundColor);
    root.style.setProperty('--text-color', textColor);
    root.style.setProperty('--gradient-from', gradientFrom);
    root.style.setProperty('--gradient-via', gradientVia);
    root.style.setProperty('--gradient-to', gradientTo);
    root.style.setProperty('--dither-color', hexToRgba(accentColor, 0.1));
    
    // Typography
    root.style.setProperty('--hero-title-size', `${heroTitleSize}px`);
    root.style.setProperty('--hero-subtitle-size', `${heroSubtitleSize}px`);
    root.style.setProperty('--section-title-size', `${sectionTitleSize}px`);
    
    // Spacing
    root.style.setProperty('--hero-padding', `${heroPadding}px`);
    root.style.setProperty('--section-padding', `${sectionPadding}px`);
    root.style.setProperty('--button-padding-x', `${buttonPaddingX}px`);
    root.style.setProperty('--button-padding-y', `${buttonPaddingY}px`);
    
    // Effects
    root.style.setProperty('--dither-opacity', ditherOpacity.toString());
    root.style.setProperty('--button-shadow-intensity', buttonShadowIntensity.toString());
    root.style.setProperty('--button-hover-scale', buttonHoverScale.toString());
    
    // Border
    root.style.setProperty('--border-color', borderColor);
    root.style.setProperty('--border-radius', `${borderRadius}px`);
  }, [
    accentColor,
    backgroundColor,
    textColor,
    gradientFrom,
    gradientVia,
    gradientTo,
    heroTitleSize,
    heroSubtitleSize,
    sectionTitleSize,
    heroPadding,
    sectionPadding,
    buttonPaddingX,
    buttonPaddingY,
    ditherOpacity,
    buttonShadowIntensity,
    buttonHoverScale,
    borderColor,
    borderRadius,
  ]);

  return null; // Leva renders its own UI
}
