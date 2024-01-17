import { Ref, RefObject, useEffect } from "react";

interface UseSwipeProps {
  onSwipeLeft?: (e?: unknown) => void;
  onSwipeRight?: (e?: unknown) => void;
  threshold?: number;
  element: Ref<HTMLElement>;
}

export default function useSwipe(props: UseSwipeProps) {
  const { onSwipeLeft = () => {}, onSwipeRight = () => {}, element, threshold = 100 } = props;
  useEffect(() => {
    const listWrapper = (element as RefObject<HTMLElement>).current;
    if (listWrapper) {
      let touchstartX = 0;
      let touchendX = 0;

      const checkDirection = () => {
        if (touchendX + threshold < touchstartX) {
          onSwipeLeft();
        }
        if (touchendX > touchstartX + threshold) {
          onSwipeRight();
        }
      };
      const touchStartHandler = (e: TouchEvent) => {
        touchstartX = e.changedTouches[0]?.screenX ?? 0;
      };
      const touchEndHandler = (e: TouchEvent) => {
        touchendX = e.changedTouches[0]?.screenX ?? 0;
        checkDirection();
      };

      listWrapper.addEventListener("touchstart", touchStartHandler, { passive: true });

      listWrapper.addEventListener("touchend", touchEndHandler, { passive: true });
      return () => {
        listWrapper.removeEventListener("touchstart", touchStartHandler);
        listWrapper.removeEventListener("touchend", touchEndHandler);
      };
    }
    return;
  }, [onSwipeLeft, onSwipeRight, element, threshold]);
}
