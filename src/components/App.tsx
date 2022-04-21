/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import Content from './content';
import { useScrollAnimation, useWindowDimension } from './hooks';
import PageOne, { PageOneProps } from './pages/pageOne';
import PageThree, { PageThreeProps } from './pages/pageThree';
import PageTwo, { PageTwoProps } from './pages/pageTwo';
import Sidebar from './sidebar-nav';

function App() {
  // Dimensions from window
  const { width, height } = useWindowDimension();

  // Refs for container and pages
  const scrollableContainer = useRef<HTMLDivElement>(null);
  const pageOne = useRef<HTMLDivElement>(null);
  const pageTwo = useRef<HTMLDivElement>(null);
  const pageThree = useRef<HTMLDivElement>(null);

  // Animations
  const pageOneAnimations: PageOneProps = {
    scale: useScrollAnimation(scrollableContainer, pageOne, ['0.5', '1'], 0, 0),
  };

  const pageTwoAnimations: PageTwoProps = {
    textX: useScrollAnimation(scrollableContainer, pageTwo, ['0', `${width}px`], 0, 0),
  };

  const pageThreeAnimations: PageThreeProps = {
    boxX: useScrollAnimation(scrollableContainer, pageThree, [`${width}px`, '0px'], height, 0),
    boxOpacity: useScrollAnimation(scrollableContainer, pageThree, [`1`, '0']),
    bgGradient: useScrollAnimation(scrollableContainer, pageThree, ['#64748Bcc', '#0B1D26']),
  };

  return (
    <>
      <Content ref={scrollableContainer}>
        <PageOne ref={pageOne} {...pageOneAnimations} />
        <PageTwo ref={pageTwo} {...pageTwoAnimations} />
        <PageThree ref={pageThree} {...pageThreeAnimations} />
      </Content>
      <Sidebar />
    </>
  );
}

export default App;
