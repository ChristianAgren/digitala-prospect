import React, { useCallback, useEffect, useRef } from 'react';
import VideoPlayer from '../video.player-old/videoplayer';

interface IPageTwoProps {
  playVideo: {
    trigger: boolean;
    isInView: boolean;
  };
  scrollableContainer: React.RefObject<HTMLDivElement>;
}

const PageTwo = React.forwardRef<HTMLDivElement, IPageTwoProps>(({ playVideo, scrollableContainer }, ref) => {
  const localRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);

  const scrollToVideo = useCallback(() => {
    if (!scrollableContainer.current) return;
    // eslint-disable-next-line no-param-reassign
    scrollableContainer.current.style.overflowY = 'hidden';
    document.body.style.overflowY = 'hidden';
    timerRef.current = setTimeout(() => {
      if (!scrollableContainer.current || !localRef.current) return;
      if (!timerRef.current) return;
      const { bottom } = localRef.current.getBoundingClientRect();
      scrollableContainer.current.scrollTo({ top: bottom, behavior: 'smooth' });
      // eslint-disable-next-line no-param-reassign
      scrollableContainer.current.style.overflowY = 'auto';
      document.body.style.overflowY = 'auto';
    }, 300);
  }, [scrollableContainer]);

  useEffect(() => {
    if (!playVideo.trigger) return;
    scrollToVideo();
  }, [playVideo.trigger, scrollToVideo]);

  useEffect(
    () => () => {
      localRef.current = null;
    },
    []
  );

  return (
    <div
      ref={node => {
        localRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          // eslint-disable-next-line no-param-reassign
          ref.current = node;
        }
      }}
      className="w-full h-[200vh] relative bg-black"
    >
      <div className="sticky top-0 h-screen">
        <VideoPlayer playing={playVideo.isInView} />
      </div>
    </div>
  );
});

export default PageTwo;
