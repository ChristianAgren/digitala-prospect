import { useElementScroll, useTransform } from 'framer-motion';
import { RefObject, useCallback, useLayoutEffect, useState } from 'react';

type OutPutType<T> = [T, T] | [T, T, T] | [T, T, T, T];

function useScrollAnimation<T>(
  scrollBody: RefObject<HTMLElement>,
  scrollTrack: RefObject<HTMLElement>,
  outPut: OutPutType<T>,
  startBeforeInPixels = 0,
  endBeforeInPixels = 0
) {
  const defaultValues = outPut.map(() => 0);
  const { scrollY } = useElementScroll(scrollBody);
  const [scrollValues, setScrollValues] = useState(defaultValues);
  const value = useTransform(scrollY, scrollValues, outPut);

  const generateScreenOrientedAnimations = useCallback(() => {
    if (!scrollTrack.current || !scrollBody.current) return [];
    const scrollBodyRect = scrollBody.current.getBoundingClientRect();
    const scrollTrackRect = scrollTrack.current.getBoundingClientRect();
    const newValues = [];
    const start = scrollTrackRect.top - startBeforeInPixels;
    const stop = scrollTrackRect.bottom - endBeforeInPixels - scrollBodyRect.height;
    newValues.push(start);
    if (outPut.length > 2) {
      const center = (start + stop) / 2;
      newValues.push(center);
    }
    newValues.push(stop);
    return newValues;
  }, [endBeforeInPixels, outPut.length, scrollBody, scrollTrack, startBeforeInPixels]);

  const generateGlobalAnimations = useCallback(() => {
    if (!scrollTrack.current || !scrollBody.current) return [];
    const scrollBodyRect = scrollBody.current.getBoundingClientRect();
    const scrollTrackRect = scrollTrack.current.getBoundingClientRect();
    const start = scrollTrackRect.top - scrollBodyRect.height / 2;
    const stop = scrollTrackRect.bottom;
    const animateOut = scrollTrackRect.bottom - scrollBodyRect.height / 2;
    const animateIn = scrollTrackRect.top;
    // console.log(start, animateIn, animateOut, stop);

    return [start, animateIn, animateOut, stop];
  }, [scrollBody, scrollTrack]);

  useLayoutEffect(() => {
    if (!scrollTrack.current || !scrollBody.current) return;
    const newValues = outPut.length === 4 ? generateGlobalAnimations() : generateScreenOrientedAnimations();
    setScrollValues(newValues);
  }, [
    scrollTrack,
    scrollBody,
    startBeforeInPixels,
    endBeforeInPixels,
    outPut.length,
    generateScreenOrientedAnimations,
    generateGlobalAnimations,
  ]);

  return value;
}

export default useScrollAnimation;
