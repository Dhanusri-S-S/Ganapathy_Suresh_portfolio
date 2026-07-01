import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 ${className}`}
      aria-hidden="true"
    >
      {/* Outer Shield with Gold stroke and Forest Green fill */}
      <path
        d="M50 8 L88 27 V73 L50 92 L12 73 V27 Z"
        stroke="#C5A880"
        strokeWidth="4"
        fill="#1F4D3A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Thin Accent Shield */}
      <path
        d="M50 15 L81 30 V70 L50 85 L19 70 V30 Z"
        stroke="#C5A880"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        fill="none"
      />
      {/* Custom 'G' Path */}
      <path
        d="M44 36 C38 36 34 40 34 46 C34 52 38 56 44 56 C49 56 51 52 51 49 H45"
        stroke="#C5A880"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Custom 'S' Path */}
      <path
        d="M66 39 C64 37 61 36 58 36 C54 36 53 39 56 41 C59 43 66 44 66 49 C66 54 61 56 57 56 C53 56 51 54 51 52"
        stroke="#C5A880"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Architectural Divider Line */}
      <line
        x1="32"
        y1="64"
        x2="68"
        y2="64"
        stroke="#C5A880"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Centered Small Star at top of divider */}
      <polygon
        points="50,60 51.5,63 54.5,63 52,65 53,68 50,66 47,68 48,65 45.5,63 48.5,63"
        fill="#C5A880"
      />
    </svg>
  );
}
