import { useEffect, useRef } from "react";

export function useOutisedeClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      // eslint-disable-next-line
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
