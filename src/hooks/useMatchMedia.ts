import { useEffect, useState } from "react";

export const useMatchMedia = (mediaQuery: string): boolean => {
  const [isMatching, setIsMatching] = useState<boolean>(false);

  useEffect(() => {
    const mediaWatcher = window.matchMedia(mediaQuery);
    setIsMatching(mediaWatcher.matches);

    function updateIsMatch(e: MediaQueryListEvent) {
      setIsMatching(e.matches);
    }
    mediaWatcher.addEventListener("change", updateIsMatch);

    return function cleanup() {
      mediaWatcher.removeEventListener("change", updateIsMatch);
    };
  }, [mediaQuery]);

  return isMatching;
};
