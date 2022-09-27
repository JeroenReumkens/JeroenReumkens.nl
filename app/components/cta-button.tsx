import { NavLink } from '@remix-run/react';
import classNames from 'classnames';
import { DoubleArrowIcon } from './icons/double-arrow';

interface CtaButtonProps {
  children: React.ReactNode;
  subtitle?: string;
  to: string;
  className?: string;
  variant?: 'small' | 'large';
}

export const CtaButton = ({
  children,
  to,
  subtitle,
  className,
  variant = 'large',
}: CtaButtonProps) => (
  <NavLink
    to={to}
    className={classNames(
      'text-[currentColor] inline-flex items-center border font-serif font-medium leading-tight transition-colors hover:bg-white hover:text-black',
      className,
      variant === 'large'
        ? 'rounded-lg px-4 py-3 text-lg'
        : 'rounded-md px-3 py-2 text-small'
    )}
  >
    <DoubleArrowIcon className="h-3 w-3" />
    <span className="ml-3 flex flex-col">
      {children}
      {subtitle && <span className="text-small font-regular">{subtitle}</span>}
    </span>
  </NavLink>
);
