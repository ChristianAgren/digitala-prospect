import { RefObject, useEffect, useMemo, useState } from 'react';

function useScrollTriggerInView(scrollTrack: RefObject<HTMLElement>, threshold: number, onlyTriggerOnce = false) {
  const [isInView, setIsInView] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          if (onlyTriggerOnce && isInView) return;
          setIsInView(!!entry?.isIntersecting);
        },
        {
          threshold,
        }
      ),
    [isInView, onlyTriggerOnce, threshold]
  );

  useEffect(() => {
    if (!scrollTrack.current) return undefined;
    observer.observe(scrollTrack.current);
    return () => {
      observer.disconnect();
    };
  }, [observer, scrollTrack]);

  return isInView;
}

export default useScrollTriggerInView;
