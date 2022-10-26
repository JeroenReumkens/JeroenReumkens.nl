import { forwardRef } from 'react';

interface IconProps {
  className?: string;
}

export const DoubleArrowIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <svg
      ref={ref}
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.32568 1.16309L21.8056 22.2677L1.11163 43.1625M21.7382 1.26712L42.2181 22.3718L21.5241 43.2666"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
);
