import React from 'react';

export interface RailLogoProps {
  size?: number | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'icon' | 'badge' | 'full' | 'image';
  showText?: boolean;
  className?: string;
  glow?: boolean;
  isDark?: boolean;
}

const SIZE_MAP: Record<string, number> = {
  sm: 24,
  md: 32,
  lg: 44,
  xl: 56,
};

/**
 * Dynamic Shadow-Block Corridor Engine SVG (IRIS AI)
 * Features:
 * - 4px Geometric Rounded Dark Frame (#090D16 / #020408)
 * - Rolling Time-Distance Horizon Arcs (Cost & Delay Compression Sweep)
 * - Dual High-Speed Corridor Rails with blue-to-cyan gradient
 * - Dynamic "Shadow Block" Time-Window Container (Bundled Maintenance/Freight Slot in Emerald/Amber)
 * - Active Train Headway Pulse & Synchronized Zero-Gap Slotting
 * - Corridor Efficiency Metrics Pulse Arc
 */
export const ShadowBlockMatrixSvg: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 select-none ${className}`}
    aria-label="IRIS AI Shadow Block Engine"
  >
    <defs>
      {/* Dark Obsidian Base Gradient */}
      <linearGradient id="sbDarkBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0B0E14" />
        <stop offset="100%" stopColor="#020408" />
      </linearGradient>

      {/* Primary High-Speed Corridor Gradient */}
      <linearGradient id="corridorGrad" x1="12" y1="52" x2="52" y2="12" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1E40AF" />
        <stop offset="50%" stopColor="#2B7FFF" />
        <stop offset="100%" stopColor="#00F0FF" />
      </linearGradient>

      {/* Shadow Block Glow Fill */}
      <linearGradient id="shadowBlockGrad" x1="24" y1="20" x2="48" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
      </linearGradient>

      {/* Efficiency Laser Pulse */}
      <linearGradient id="efficiencyPulse" x1="14" y1="46" x2="50" y2="18" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#00F0FF" />
      </linearGradient>
    </defs>

    {/* 4px Geometric Rounded Dark Frame */}
    <rect x="3" y="3" width="58" height="58" rx="10" fill="url(#sbDarkBg)" stroke="#2B7FFF" strokeWidth="1.5" strokeOpacity="0.45" />

    {/* Rolling Time-Distance Horizon Arcs (Cost & Delay Compression Sweep) */}
    <path d="M12 28 C12 16 22 8 34 8 C46 8 54 16 54 28" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.4" />
    
    {/* Dual High-Speed Track Rails */}
    <line x1="16" y1="50" x2="48" y2="18" stroke="url(#corridorGrad)" strokeWidth="4" strokeLinecap="round" />
    <line x1="22" y1="54" x2="54" y2="22" stroke="url(#corridorGrad)" strokeWidth="4" strokeLinecap="round" />

    {/* Dynamic "Shadow Block" Time-Window Container (Bundled Maintenance/Freight) */}
    <rect
      x="22"
      y="22"
      width="22"
      height="22"
      rx="4"
      transform="rotate(45 33 33)"
      fill="url(#shadowBlockGrad)"
      stroke="#10B981"
      strokeWidth="1.5"
      strokeDasharray="4 2"
    />

    {/* Active Train Headway Pulse (Front Rake Slot) */}
    <circle cx="48" cy="18" r="3.5" fill="#00F0FF" />
    <circle cx="48" cy="18" r="1.5" fill="#090D16" />

    {/* Synchronized Shadow Slot (Zero-Gap Bundled Window) */}
    <circle cx="33" cy="33" r="3" fill="#10B981" />
    
    {/* Rear Approach Guard */}
    <circle cx="18" cy="48" r="2.5" fill="#F59E0B" />

    {/* Corridor Efficiency Metrics Pulse Arc */}
    <path d="M40 10 L52 10 L52 22" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Backward-compatible export aliases
export const RailMarkSvg = ShadowBlockMatrixSvg;
export const IrisMonogramSvg = ShadowBlockMatrixSvg;

export const RailLogo: React.FC<RailLogoProps> = ({
  size = 'md',
  variant = 'badge',
  showText = false,
  className = '',
}) => {
  const numericSize = typeof size === 'number' ? size : SIZE_MAP[size] || 32;

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <img
          src="/icon.png"
          alt="IRIS AI Favicon"
          width={numericSize}
          height={numericSize}
          className="rounded-lg shrink-0 object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      <div className="relative flex items-center justify-center transition-all duration-200 ease-out group-hover:scale-[1.03] group-active:scale-[0.97]">
        <img
          src="/icon.png"
          alt="IRIS AI Logo"
          width={numericSize}
          height={numericSize}
          className="rounded-lg shrink-0 object-contain shadow-xs border border-blue-500/30"
          style={{ width: numericSize, height: numericSize }}
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-none text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold tracking-tight text-[#0F172A] dark:text-[#E2E3E9] group-hover:text-[#2B7FFF] transition-colors">
              IRIS AI
            </span>
            <span
              className="text-[9px] font-mono font-semibold bg-[#E6F0FA] dark:bg-blue-950/40 text-[#2B7FFF] dark:text-blue-300 px-1 py-0.2 border border-[#D0DFEE] dark:border-blue-800/40"
              style={{ borderRadius: '4px' }}
            >
              SHADOW-BLOCK
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 tracking-wider uppercase mt-0.5">
            Autonomous Rail & Delay Engine
          </span>
        </div>
      )}
    </div>
  );
};

export default RailLogo;
