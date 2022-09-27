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
      'text-[currentColor] relative inline-flex items-center border font-serif font-medium leading-tight transition-colors hover:bg-white hover:text-black',
      'before:absolute before:right-[-2rem] before:top-[-2rem] before:block before:rounded-md before:bg-yellow before:px-3 before:py-2 before:text-[1.8rem] before:text-black before:content-["soon"]',
      className,
      variant === 'large'
        ? 'rounded-lg px-4 py-3 text-small sm:text-lg'
        : 'rounded-md px-3 py-2 text-small'
    )}
  >
    <DoubleArrowIcon className="min-h-3 min-w-3" />
    <span className="ml-3 flex flex-col">
      {children}
      {subtitle && <span className="text-small font-regular">{subtitle}</span>}
    </span>
  </NavLink>
);
