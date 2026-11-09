import React from 'react';

/**
 * Official Homoeo Care logo, taken from the clinic's trifold brochure:
 * a sky-blue medical cross with a green healing leaf, "Homoeo Care"
 * wordmark and the "Pure Care, Pure Cure" tagline.
 *
 * - variant="full": cross + wordmark + tagline (/images/logo.png)
 * - variant="mark": cross + leaf only (/images/logo-mark.png)
 */
export function ClinicLogo({ size = 52, variant = 'mark', className = '' }) {
  const isFull = variant === 'full';
  return (
    <img
      src={isFull ? '/images/logo.png' : '/images/logo-mark.png'}
      alt={isFull ? 'Homoeo Care — Pure Care, Pure Cure' : ''}
      aria-hidden={isFull ? undefined : 'true'}
      className={`clinic-logo-img ${isFull ? 'is-full' : 'is-mark'} ${className}`}
      style={isFull ? { height: size, width: 'auto' } : { width: size, height: size }}
      draggable="false"
    />
  );
}
