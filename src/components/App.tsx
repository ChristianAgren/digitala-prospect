/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import Content from './content';
import Sidebar from './sidebar-nav';
import { useScrollAnimation, useWindowDimension, useScrollTriggerInView } from './hooks';
import StartPage, { StartPageProps } from './pages/startPage';
import VideoPage, { VideoPageProps } from './pages/videoPage';
import DescPage, { DescPageProps } from './pages/descPage';
import EntrancePage, { EntrancePageProps } from './pages/entrancePage';
import BedroomPage, { BedroomPageProps } from './pages/bedroomPage';
import KitchenPage, { KitchenPageProps } from './pages/kitchenPage';
import BathroomPage, { BathroomPageProps } from './pages/bathroomPage';

function App() {
  // Dimensions from window
  const { height } = useWindowDimension();

  // Ref for main scrollable area
  const scrollableContainer = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const entranceRef = useRef<HTMLDivElement>(null);
  const bedroomRef = useRef<HTMLDivElement>(null);
  const kitchenRef = useRef<HTMLDivElement>(null);
  const bathroomRef = useRef<HTMLDivElement>(null);

  // All individual pages and reference elements
  const pages = {
    start: {
      title: 'Startsida',
      ref: startRef,
      sidebarAnimation: {
        opacity: useScrollAnimation(scrollableContainer, startRef, ['0.5', '1', '1', '0.5']),
        scale: useScrollAnimation(scrollableContainer, startRef, ['.95', '1', '1', '.95']),
      },
    },
    video: {
      title: 'Bostadsvideo',
      ref: videoRef,
      sidebarAnimation: {
        opacity: useScrollAnimation(scrollableContainer, videoRef, ['0.5', '1', '1', '0.5']),
        scale: useScrollAnimation(scrollableContainer, videoRef, ['.95', '1', '1', '.95']),
      },
    },
    description: {
      title: 'Områdesbeskrivning',
      ref: descriptionRef,
      sidebarAnimation: {
        opacity: useScrollAnimation(scrollableContainer, descriptionRef, ['0.5', '1', '1', '0.5']),
        scale: useScrollAnimation(scrollableContainer, descriptionRef, ['.95', '1', '1', '.95']),
      },
    },
    entrance: {
      title: 'Entré/Hall',
      ref: entranceRef,
      sidebarAnimation: {
        opacity: useScrollAnimation(scrollableContainer, entranceRef, ['0.5', '1', '1', '0.5']),
        scale: useScrollAnimation(scrollableContainer, entranceRef, ['.95', '1', '1', '.95']),
      },
    },
    bedroom: {
      title: 'Sovrum',
      ref: bedroomRef,
      sidebarAnimation: {
        opacity: useScrollAnimation(scrollableContainer, bedroomRef, ['0.5', '1', '1', '0.5']),
        scale: useScrollAnimation(scrollableContainer, bedroomRef, ['.95', '1', '1', '.95']),
      },
    },
    kitchen: {
      title: 'Kök',
      ref: kitchenRef,
      sidebarAnimation: {
        opacity: useScrollAnimation(scrollableContainer, kitchenRef, ['0.5', '1', '1', '0.5']),
        scale: useScrollAnimation(scrollableContainer, kitchenRef, ['.95', '1', '1', '.95']),
      },
    },
    bathroom: {
      title: 'Badrum',
      ref: bathroomRef,
      sidebarAnimation: {
        opacity: useScrollAnimation(scrollableContainer, bathroomRef, ['0.5', '1', '1', '0.5']),
        scale: useScrollAnimation(scrollableContainer, bathroomRef, ['.95', '1', '1', '.95']),
      },
    },
  };

  // Animations for pages
  const startPageProps: StartPageProps = {
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
      opacity: useScrollAnimation(scrollableContainer, pages.start.ref, ['0', '1'], -height / 3, height / 2),
    },
  };

  const videoPageProps: VideoPageProps = {
    playVideo: useScrollTriggerInView(pages.video.ref),
    opacity: useScrollAnimation(scrollableContainer, pages.video.ref, ['1', '0'], -height - 400, -height + 100),
  };

  const descPageProps: DescPageProps = {
    container: {
      backgroundColor: useScrollAnimation(
        scrollableContainer,
        pages.description.ref,
        ['#0b1d26', '#FFFFFF'],
        height / 2,
        height / 2
      ),
    },
    shouldAnimate: useScrollTriggerInView(pages.description.ref, true),
  };

  const entrancePageProps: EntrancePageProps = {
    shouldAnimate: useScrollTriggerInView(pages.entrance.ref),
  };

  const bedroomPageProps: BedroomPageProps = {
    shouldAnimate: useScrollTriggerInView(pages.bedroom.ref),
  };

  const kitchenPageProps: KitchenPageProps = {
    shouldAnimate: useScrollTriggerInView(pages.kitchen.ref),
  };

  const bathroomPageProps: BathroomPageProps = {
    shouldAnimate: useScrollTriggerInView(pages.bathroom.ref),
  };

  return (
    <>
      <Content ref={scrollableContainer}>
        <StartPage ref={pages.start.ref} {...startPageProps} />
        <VideoPage ref={pages.video.ref} {...videoPageProps} />
        <DescPage ref={pages.description.ref} {...descPageProps} />
        <EntrancePage ref={pages.entrance.ref} {...entrancePageProps} />
        <BedroomPage ref={pages.bedroom.ref} {...bedroomPageProps} />
        <KitchenPage ref={pages.kitchen.ref} {...kitchenPageProps} />
        <BathroomPage ref={pages.bathroom.ref} {...bathroomPageProps} />
      </Content>
      <Sidebar pages={pages} />
    </>
  );
}

export default App;
