/**
 * ReviewLens Design System Tokens — Luxury Editorial Daylight Reference
 * 
 * Visual Architecture:
 * - Dominant Foundations: Warm Ivory, Soft Cream, Pearl White, Very Light Beige
 * - Subtle Accents: Lavender Blue, Soft Lilac, Powder Blue, Muted Peach, Warm Champagne, Mint
 * - Typography: High-contrast Dark Charcoal for headlines and body text
 * - Surfaces: Translucent frosted glass with hairline 1px borders and diffuse ambient shadows
 */

export const colors = {
  // Foundations
  ivory: '#FAF8F5',
  cream: '#F6F3ED',
  pearlWhite: '#FFFFFF',
  veryLightBeige: '#EFEAE2',
  warmChampagne: '#F7F1E5',
  panel: '#FFFFFF',
  elevated: '#F9F7F2',
  surfaceBorder: 'rgba(24, 24, 27, 0.08)',
  subtleBorder: 'rgba(24, 24, 27, 0.05)',
  cardGlassBg: 'rgba(255, 255, 255, 0.82)',

  // Typography
  charcoal: '#18181B',
  charcoalMuted: '#27272A',
  bodyText: '#52525B',
  caption: '#71717A',
  subtle: '#A1A1AA',

  // Subtle Luxury Accents (Non-Neon)
  lavenderBlue: '#6B7CFF',
  softLilac: '#9B87F5',
  powderBlue: '#7EA5D9',
  mutedPeach: '#F59E72',
  champagneGold: '#D9B98B',
  softMint: '#38B2AC',
  softRose: '#E06D85',

  // Semantics
  evidenceActive: '#6B7CFF',
  intelligence: '#9B87F5',
  discovery: '#7EA5D9',
  provenance: '#506FD8',
  corroboration: '#2D9A76',
  conflict: '#D97736',
} as const;

export const glows = {
  lavenderSubtle: '0 0 20px rgba(107, 124, 255, 0.18)',
  peachSubtle: '0 0 20px rgba(245, 158, 114, 0.18)',
  blueSubtle: '0 0 20px rgba(126, 165, 217, 0.18)',
  cardLight: '0 20px 40px -15px rgba(24, 24, 27, 0.06), 0 1px 3px rgba(24, 24, 27, 0.04)',
  pillShadow: '0 12px 28px -8px rgba(24, 24, 27, 0.08)',
} as const;

export const gradients = {
  // Editorial Lavender-Blue text gradient for selected headline words
  editorialItalic: 'linear-gradient(135deg, #4A5CD8 0%, #7585F8 50%, #9B87F5 100%)',
  headline: 'linear-gradient(180deg, #18181B 0%, #27272A 100%)',
  
  // Soft ambient surfaces
  warmIvoryToCream: 'linear-gradient(180deg, #FAF8F5 0%, #F5F1E9 100%)',
  terraceAtmosphere: 'linear-gradient(180deg, rgba(250, 248, 245, 0.95) 0%, rgba(246, 243, 237, 0.98) 100%)',
  cardSurface: 'linear-gradient(180deg, rgba(255, 255, 255, 0.92) 0%, rgba(252, 250, 246, 0.88) 100%)',
  
  // Status gradients
  amberAlert: 'linear-gradient(135deg, rgba(254, 243, 199, 0.7) 0%, rgba(255, 255, 255, 0.9) 100%)',
  mintCorroboration: 'linear-gradient(135deg, rgba(209, 250, 229, 0.7) 0%, rgba(255, 255, 255, 0.9) 100%)',
} as const;
