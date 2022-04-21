import { useElementScroll, useTransform } from 'framer-motion';
import { RefObject, useLayoutEffect, useState } from 'react';

type OutPutType<T> = [T, T];

function useScrollAnimation<T>(
  scrollBody: RefObject<HTMLElement>,
  scrollTrack: RefObject<HTMLElement>,
  outPut: OutPutType<T>,
  startBeforeInPixels = 0,
  endBeforeInPixels = 0
) {
  const { scrollY } = useElementScroll(scrollBody);
  const [scrollValues, setScrollValues] = useState([0, 0]);
  const value = useTransform(scrollY, scrollValues, outPut);

  useLayoutEffect(() => {
    if (!scrollTrack.current || !scrollBody.current) return;
    const scrollBodyRect = scrollBody.current.getBoundingClientRect();
    const scrollTrackRect = scrollTrack.current.getBoundingClientRect();
    const scrollStart = scrollTrackRect.top - startBeforeInPixels;
    const scrollEnd = scrollTrackRect.bottom - endBeforeInPixels - scrollBodyRect.height;
    setScrollValues([scrollStart, scrollEnd]);
  }, [scrollTrack, scrollBody, startBeforeInPixels, endBeforeInPixels]);

  return value;
}

export default useScrollAnimation;
