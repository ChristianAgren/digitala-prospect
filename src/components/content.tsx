import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Content = React.forwardRef<HTMLDivElement, Props>(({ children }, ref) => (
  <div
    ref={ref}
    className="relative h-screen w-[calc(100vw-var(--sidebar-width))] overflow-y-auto remove-scroll overflow-x-hidden"
  >
    {children}
  </div>
));

export default Content;
