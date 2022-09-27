import type { ForwardedRef, MutableRefObject, RefObject } from 'react';
import { useEffect, useMemo, useRef } from 'react';
import { animate } from 'motion';

export const setGooglyPosition = (
  x: number,
  y: number,
  wrapper: HTMLDivElement
) => {
  wrapper.style.setProperty('--googly-x', `${x}px`);
  wrapper.style.setProperty('--googly-y', `${y}px`);
};

const randomNumberBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const googlyEyeYMin = -5;
const googlyEyeYMax = 10;
const googlyEyeXMin = -10;
const googlyEyeXMax = 20;

interface GoogleEyesProps {
  wrapperRef:
    | RefObject<HTMLDivElement | HTMLImageElement>
    | ForwardedRef<HTMLImageElement>;
}

export const GoogleEyes = ({ wrapperRef }: GoogleEyesProps) => {
  const leftEye = useRef<SVGCircleElement>(null);
  const rightEye = useRef<SVGCircleElement>(null);

  const wrapperDimensions = useMemo(() => {
    if (
      !wrapperRef ||
      !('current' in wrapperRef) ||
      wrapperRef.current === null
    )
      return { width: 300, height: 600 };
    return {
      width: wrapperRef.current.clientWidth,
      height: wrapperRef.current.clientHeight,
    };
  }, []);

  /**
   * Randomely moves googly eyes pupils.
   */
  useEffect(() => {
    setInterval(() => {
      if (!leftEye.current || !rightEye.current) return;

      [leftEye.current, rightEye.current].forEach((eye) => {
        animate(eye, {
          y: randomNumberBetween(googlyEyeYMin, googlyEyeYMax),
          x: randomNumberBetween(googlyEyeXMin, googlyEyeXMax),
        });
      });
    }, 800);
  }, []);

  /**
   * Randomely move around googly eyes wrapper over image.
   */
  useEffect(() => {
    setInterval(() => {
      if (
        wrapperRef &&
        'current' in wrapperRef &&
        wrapperRef.current !== null
      ) {
        setGooglyPosition(
          Math.random() * wrapperDimensions.width,
          Math.random() * wrapperDimensions.height,
          wrapperRef.current
        );
      }
    }, 3000);
  }, [wrapperDimensions, wrapperRef]);

  return (
    <svg
      data-name="googly-eyes"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 110 56"
      width="100%"
      className="pointer-events-none absolute top-[0] left-[0] z-10 w-[100px] translate-x-[calc(var(--googly-x)-50px)] translate-y-[calc(var(--googly-y)+25px)] transition-transform"
    >
      <circle
        fill="white"
        strokeWidth={5}
        stroke="black"
        r="25"
        cy="28"
        cx="28"
      />
      <circle
        fill="white"
        strokeWidth={5}
        stroke="black"
        r="25"
        cy="28"
        cx="82"
      />
      <g transform="translate(8,5)">
        <circle ref={leftEye} fill="black" r="10" cy="30" cx="25" />
        <circle ref={rightEye} fill="black" r="10" cy="30" cx="65" />
      </g>
    </svg>
  );
};
