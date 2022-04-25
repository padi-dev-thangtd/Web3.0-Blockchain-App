import { useEffect, useState } from 'react';

export const useClientRect = (ref) => {
  const getClientRect = () => {
    if (!ref || !ref.current) return null;

    const clientRects = ref.current.getClientRects();
    return clientRects.length > 0 ? clientRects[0] : null;
  };

  const [state, setState] = useState(getClientRect());
  const updateState = () => setState(getClientRect());

  useEffect(() => {
    updateState();
    window.addEventListener('resize', updateState);
    return () => window.removeEventListener('resize', updateState);
  }, [ref]);

  return state;
};
export const useClientDomRect = (ref) => {
  const getClientRect = () => {
    if (!ref) return null;
    const clientRects = ref.getClientRects();
    return clientRects.length > 0 ? clientRects[0] : null;
  };

  const [state, setState] = useState(getClientRect());
  const updateState = () => setState(getClientRect());

  useEffect(() => {
    updateState();
    window.addEventListener('resize', updateState);
    return () => window.removeEventListener('resize', updateState);
  }, [ref]);

  return state;
};
