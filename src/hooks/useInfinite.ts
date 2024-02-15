import { LegacyRef, RefObject, useEffect, useRef, useState } from 'react';

function useInfinite(): [LegacyRef<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {  
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      });
    });
    if (ref.current) {
      io.observe(ref.current);
    }

    return () => {
      io.disconnect();
    };
  }, [ref]);

  return [ref, isIntersecting];
}

export default useInfinite;
