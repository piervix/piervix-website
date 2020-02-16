import { useLayoutEffect } from "react";
import _ from "lodash";

const useWindowEvent = (event, callback) => {
  useLayoutEffect(() => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  }, [event, callback]);
};

export const useOnMouseWheel = callback => {
  return useWindowEvent(
    "wheel",
    _.throttle(callback, 1500, {
      trailing: false,
    })
  );
};

export const useKeyDown = callback => {
  return useWindowEvent(
    "keydown",
    _.throttle(callback, 1500, {
      trailing: false,
    })
  );
};
