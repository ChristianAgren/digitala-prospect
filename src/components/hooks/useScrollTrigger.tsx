import { useElementScroll } from 'framer-motion';
import { RefObject, useEffect, useLayoutEffect, useMemo, useState } from 'react';

function useScrollTrigger(
  scrollBody: RefObject<HTMLElement>,
  scrollTrack: RefObject<HTMLElement>,
  startBeforeInPixels = 0,
  onlyTriggerOnce = true,
  onlyTriggerWhenScrollingDown = true
) {
  const { scrollY } = useElementScroll(scrollBody);
  const [trigger, setTrigger] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [y, setY] = useState({ curr: 0, prev: 0 });

  useLayoutEffect(() => {
    if (!scrollTrack.current) return;
    if (onlyTriggerOnce && trigger) return;
    if (y.curr < y.prev && onlyTriggerWhenScrollingDown) return;
    const scrollTrackRect = scrollTrack.current.getBoundingClientRect();
    if (y.curr > scrollTrackRect.top - startBeforeInPixels && y.curr < scrollTrackRect.bottom) setTrigger(true);
  }, [scrollY, scrollTrack, onlyTriggerOnce, trigger, onlyTriggerWhenScrollingDown, startBeforeInPixels, y]);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => setIsInView(!!entry?.isIntersecting), {
        threshold: 0.5,
      }),
    []
  );

  useEffect(() => {
    if (!scrollTrack.current) return undefined;
    observer.observe(scrollTrack.current);
    return () => {
      observer.disconnect();
    };
  }, [observer, scrollTrack]);

  useEffect(() => console.log(isInView), [isInView]);
  useEffect(() => scrollY.onChange(v => setY(prev => ({ curr: v, prev: prev.curr }))), [scrollY]);
  return { trigger, isInView };
}

export default useScrollTrigger;
