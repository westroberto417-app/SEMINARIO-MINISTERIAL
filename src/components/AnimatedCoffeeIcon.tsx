import React from 'react';

interface AnimatedCoffeeIconProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  steamColor?: string;
}

export default function AnimatedCoffeeIcon({
  size = 'md',
  className = '',
  steamColor = 'currentColor',
}: AnimatedCoffeeIconProps) {
  const sizeMap = {
    xs: { w: 16, h: 16, stroke: 1.8 },
    sm: { w: 20, h: 20, stroke: 2 },
    md: { w: 26, h: 26, stroke: 2 },
    lg: { w: 36, h: 36, stroke: 2.2 },
    xl: { w: 48, h: 48, stroke: 2.4 },
  };

  const config = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: config.w, height: config.h }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        width={config.w}
        height={config.h}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Animated Steam wisps */}
        <g stroke={steamColor} strokeWidth={config.stroke} strokeLinecap="round">
          <path
            d="M7 2.5C7.5 4 6.5 5 7 6.5"
            className="animate-steam-1 origin-bottom opacity-80"
          />
          <path
            d="M12 1.5C12.5 3.5 11.5 4.5 12 6.5"
            className="animate-steam-2 origin-bottom opacity-90"
          />
          <path
            d="M17 2.5C17.5 4 16.5 5 17 6.5"
            className="animate-steam-3 origin-bottom opacity-80"
          />
        </g>

        {/* Cup Body */}
        <path
          d="M4 8.5H18C18 8.5 18.5 16 11 16C3.5 16 4 8.5 4 8.5Z"
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth={config.stroke}
          strokeLinejoin="round"
        />

        {/* Heart / Coffee Foam accent inside */}
        <path
          d="M9.5 11.5C9.5 10.7 10.3 10.3 11 11C11.7 10.3 12.5 10.7 12.5 11.5C12.5 12.4 11 13.5 11 13.5C11 13.5 9.5 12.4 9.5 11.5Z"
          fill="currentColor"
          fillOpacity="0.8"
        />

        {/* Handle */}
        <path
          d="M18 10H19.5C20.88 10 22 11.12 22 12.5C22 13.88 20.88 15 19.5 15H17"
          stroke="currentColor"
          strokeWidth={config.stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Saucer / Plate */}
        <path
          d="M3 19.5H19"
          stroke="currentColor"
          strokeWidth={config.stroke}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
