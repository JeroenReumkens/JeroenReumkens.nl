import { forwardRef } from 'react';

interface IconProps {
  className?: string;
}

export const AwardIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <svg
      ref={ref}
      width="24px"
      height="24px"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#000000"
      {...props}
    >
      <path
        d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1012 0 6 6 0 00-12 0z"
        stroke="#000000"
        strokeWidth="0.5"
        fill="#F9EE8D"
      ></path>
      <path d="M10.5 15l2-1.5v5" stroke="#000000" strokeWidth="0.5"></path>
    </svg>
  )
);
