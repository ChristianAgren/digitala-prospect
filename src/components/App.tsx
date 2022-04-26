/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import Content from './content';
import { useScrollAnimation, useWindowDimension, useScrollTrigger } from './hooks';
import PageOne, { PageOneProps } from './pages/pageOne';
import PageTwo from './pages/pageTwo';
import PageThree, { PageThreeProps } from './pages/pageThree';
import Sidebar from './sidebar-nav';

function App() {
  // Dimensions from window
  const { width, height } = useWindowDimension();

  // Ref for main scrollable area
  const scrollableContainer = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const entranceRef = useRef<HTMLDivElement>(null);

  // All individual pages and reference elements
  const pages = {
    start: {
      title: 'Startsida',
      ref: startRef,
      animation: {
        opacity: useScrollAnimation(scrollableContainer, startRef, ['0.5', '1', '1', '0.5']),
        scale: useScrollAnimation(scrollableContainer, startRef, ['.95', '1', '1', '.95']),
      },
    },
    video: {
      title: 'Bodstadsvideo',
      ref: videoRef,
      animation: {
        opacity: useScrollAnimation(scrollableContainer, videoRef, ['0.5', '1', '1', '0.5']),
        scale: useScrollAnimation(scrollableContainer, videoRef, ['.95', '1', '1', '.95']),
      },
    },
    entrance: {
      title: 'Entré/hall',
      ref: entranceRef,
      animation: {
        opacity: useScrollAnimation(scrollableContainer, entranceRef, ['0.5', '1', '1', '0.5']),
        scale: useScrollAnimation(scrollableContainer, entranceRef, ['.95', '1', '1', '.95']),
      },
    },
  };

  // Animations for pages
  const pageOneProps: PageOneProps = {
    container: {
      opacity: useScrollAnimation(scrollableContainer, pages.start.ref, ['1', '0'], -height - 400, -height + 100),
    },
    wrapper: {
      width: useScrollAnimation(
        scrollableContainer,
        pages.start.ref,
        ['calc(100% - 6rem)', 'calc(100% - 0rem)'],
        0,
        600
      ),
      height: useScrollAnimation(
        scrollableContainer,
        pages.start.ref,
        ['calc(100vh - 6rem)', 'calc(100vh - 0rem)'],
        0,
        600
      ),
      left: useScrollAnimation(scrollableContainer, pages.start.ref, ['3rem', '0rem'], 0, 600),
      top: useScrollAnimation(scrollableContainer, pages.start.ref, ['3rem', '0rem'], 0, 600),
    },
    image: {
      left: useScrollAnimation(scrollableContainer, pages.start.ref, ['-3rem', '0rem'], 0, 600),
      top: useScrollAnimation(scrollableContainer, pages.start.ref, ['-3rem', '0rem'], 0, 600),
    },
    landingInfo: {
      opacity: useScrollAnimation(scrollableContainer, pages.start.ref, ['1', '0'], 0, height * 0.7),
    },
    shortDescription: {
      opacity: useScrollAnimation(scrollableContainer, pages.start.ref, ['0', '1'], 0, 300),
    },
  };

  const pageTwoProps = {
    playVideo: useScrollTrigger(scrollableContainer, pages.video.ref),
    scrollableContainer,
  };

  const pageThreeProps: PageThreeProps = {
    boxX: useScrollAnimation(scrollableContainer, pages.entrance.ref, [`${width}px`, '0px'], height, 0),
    boxOpacity: useScrollAnimation(scrollableContainer, pages.entrance.ref, ['1', '0']),
    bgGradient: useScrollAnimation(scrollableContainer, pages.entrance.ref, ['#64748Bcc', '#0B1D26']),
  };

  return (
    <>
      <Content ref={scrollableContainer}>
        <PageOne ref={pages.start.ref} {...pageOneProps} />
        <PageTwo ref={pages.video.ref} {...pageTwoProps} />
        <PageThree ref={pages.entrance.ref} {...pageThreeProps} />
      </Content>
      <Sidebar pages={pages} />
    </>
  );
}

export default App;
