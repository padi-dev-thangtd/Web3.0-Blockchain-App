import { useState } from 'react';

const useToggle = (defaultValue = false) => {
  const [value, setValue] = useState(!!defaultValue);

  function toggle() {
    setValue(!value);
  }
  function setTrue() {
    setValue(true);
  }
  function setFalse() {
    setValue(false);
  }

  return [value, toggle, setValue, setTrue, setFalse];
};

export default useToggle;
