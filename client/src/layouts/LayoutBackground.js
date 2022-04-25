import React from 'react';

export default function LayoutBackground({
  background = '',
  className = '',
  children,
  style = {},
}) {
  return (
    <div
      style={style}
      className={` layout-white min-h-screen ${background} ${className}`}
    >
      {children}
    </div>
  );
}
