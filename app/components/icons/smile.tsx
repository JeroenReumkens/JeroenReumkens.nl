import { forwardRef } from 'react';

interface IconProps {
  className?: string;
}

export const SmileIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <svg
      ref={ref}
      width="120"
      height="120"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#f9ee8d"
        d="M100 38V78M140 38V78M220 120C220 175.228 175.228 220 120 220C64.7715 220 20 175.228 20 120M238 120C238 185.17 185.17 238 120 238C54.8304 238 2 185.17 2 120C2 54.8304 54.8304 2 120 2C185.17 2 238 54.8304 238 120Z"
        stroke="black"
        stroke-width="4"
      />
    </svg>
  )
);
