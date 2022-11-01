import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const updateWindowWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowWidth);
    window.addEventListener('orientationchange', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
      window.removeEventListener('orientationchange', updateWindowWidth);
    };
  }, []);

  return width;
};

export const useScrollDepth = () => {
  const [scrollDepth, setScrollDepth] = useState(
    typeof window !== 'undefined' ? window.scrollY : 0
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateScroll = () => {
      setScrollDepth(window.scrollY);
    };

    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  return scrollDepth;
};
