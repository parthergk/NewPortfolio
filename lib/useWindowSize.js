import { useState, useEffect } from 'react';

const useWindowSize = () => {
  function getSize() {
    return {
      height: window.innerHeight,
      width: window.innerWidth,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize()); // Call getSize()

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
