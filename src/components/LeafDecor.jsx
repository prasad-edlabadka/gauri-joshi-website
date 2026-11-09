import React from 'react';

/**
 * Hand-drawn sage-green leaf stroke, echoing the corner flourishes
 * on the Homoeo Care trifold brochure. Purely decorative.
 */
export function LeafDecor({ className = '', flip = false }) {
  return (
    <svg
      className={`leaf-decor ${className}`}
      viewBox="0 0 160 160"
      fill="none"
      aria-hidden="true"
      style={flip ? { transform: 'scale(-1, -1)' } : undefined}
    >
      <path
        d="M8 150C30 112 58 78 96 48C116 32 136 18 154 8"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M30 118C14 92 18 62 40 40C50 72 46 98 30 118Z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M70 72C64 46 76 22 104 8C106 38 94 60 70 72Z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M56 100C82 104 108 96 128 74C100 68 74 78 56 100Z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

