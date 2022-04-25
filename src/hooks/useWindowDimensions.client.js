import { useState, useEffect } from 'react';
const g =
  typeof globalThis === 'object'
    ? globalThis
    : typeof window === 'object'
    ? window
    : typeof global === 'object'
    ? global
    : null;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = g;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    g.addEventListener('resize', handleResize);
    return () => g.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
