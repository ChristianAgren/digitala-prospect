import React, { useEffect, useRef } from 'react';

function useForwardedRef(ref: React.ForwardedRef<HTMLDivElement>) {
  const innerRef = useRef(null);
  useEffect(() => {
    if (!ref) return;
    if (typeof ref === 'function') {
      ref(innerRef.current);
    } else {
      // eslint-disable-next-line no-param-reassign
      ref.current = innerRef.current;
    }
  });

  return innerRef;
}

export default useForwardedRef;
