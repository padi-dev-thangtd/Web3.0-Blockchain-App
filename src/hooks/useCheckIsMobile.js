import { useState, useEffect } from "react";

export const useCheckIsMobile = () => {
  const IS_MOBILE_SCREEN_WIDTH = 765;
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = window.innerWidth <= IS_MOBILE_SCREEN_WIDTH;
    setIsMobile(checkIsMobile);
  }, []);
  useEffect(() => {
    let useGetWidthScreen;
    window.addEventListener(
      "resize",
      (useGetWidthScreen = () => {
        if (!isMobile && window.innerWidth <= IS_MOBILE_SCREEN_WIDTH) {
          setIsMobile(true);
        }
        if (isMobile && window.innerWidth > IS_MOBILE_SCREEN_WIDTH) {
          setIsMobile(false);
        }
      })
    );
    return () => {
      window.removeEventListener("resize", useGetWidthScreen);
    };
  }, [isMobile]);
  return { isMobile, setIsMobile };
};
