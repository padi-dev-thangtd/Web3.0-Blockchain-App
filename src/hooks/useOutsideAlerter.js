import { useEffect, useState } from 'react';

export function useOutsideAlerter(ref, status, handleOutside) {
  const [state, setState] = useState(status || false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        setState((p) => !p);
        handleOutside && handleOutside();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setState]);
  return [state, setState];
}
