import React from 'react';

const palette = {
  blue: 'bg-blue-600 text-white',
  gray: 'bg-gray-200 text-gray-700',
  purple: 'bg-purple-600 text-white',
};

export default function Badge({ label, color = 'blue', className = '' }) {
  const base = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold';
  const colorClasses = palette[color] || palette.blue;
  return (
    <span className={`${base} ${colorClasses} ${className}`}>{label}</span>
  );
}


