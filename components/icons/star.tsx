import { forwardRef } from 'react';

interface IconProps {
  className?: string;
}

export const StarIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <svg
      ref={ref}
      width="240"
      height="240"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M120 0C120 108 108 120 0 120C108 120 120 132 120 240C120 132 132 120 240 120C132 120 120 108 120 0Z"
        fill="#F9EE8D"
        stroke="black"
        strokeWidth="4"
      />
    </svg>
  )
);
