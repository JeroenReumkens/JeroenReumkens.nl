import { NavLink } from '@remix-run/react';
import { DoubleArrowIcon } from './icons/double-arrow';

interface CtaButtonProps {
  children: React.ReactNode;
  subtitle?: string;
  to: string;
}

export const CtaButton = ({ children, to, subtitle }: CtaButtonProps) => (
  <NavLink
    to={to}
    className="text-[currentColor] inline-flex items-center rounded-lg border px-4 py-3 font-serif text-lg font-medium leading-tight transition-colors hover:bg-white hover:text-black"
  >
    <DoubleArrowIcon />
    <span className="ml-3 flex flex-col">
      {children}
      {subtitle && <span className="text-small font-regular">{subtitle}</span>}
    </span>
  </NavLink>
);
