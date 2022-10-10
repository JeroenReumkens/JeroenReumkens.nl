import { NavLink } from '@remix-run/react';
import classNames from 'classnames';
import { DoubleArrowIcon } from './icons/double-arrow';

interface CtaButtonProps {
  children: React.ReactNode;
  subtitle?: string;
  to: string;
  className?: string;
  variant?: 'small' | 'large';
  soon?: boolean;
}

interface LinkWrapperProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

const LinkWrapper = ({ children, to, className }: LinkWrapperProps) => {
  const linkIsInteral = !to.startsWith('http');
  return linkIsInteral ? (
    <NavLink to={to} className={className}>
      {children}
    </NavLink>
  ) : (
    <a href={to} target="_blank" className={className} rel="noreferrer">
      {children}
    </a>
  );
};

export const CtaButton = ({
  children,
  to,
  subtitle,
  className,
  variant = 'large',
  soon,
}: CtaButtonProps) => {
  return (
    <LinkWrapper
      to={to}
      className={classNames(
        'text-[currentColor] group relative inline-flex items-center border text-left font-serif font-medium leading-tight shadow-hard transition-colors hover:bg-white hover:text-black',
        soon &&
          'before:absolute before:right-[-2rem] before:top-[-2rem] before:block before:rounded-md before:bg-black before:px-3 before:py-2 before:text-[1.3rem] before:text-white before:content-["soon"]',
        soon && variant === 'large' && 'before:text-[1.8rem]',
        variant === 'large'
          ? 'rounded-lg px-4 py-3 text-small sm:text-lg'
          : 'rounded-md px-3 py-2 text-small',
        className
      )}
    >
      <DoubleArrowIcon className="min-h-3 min-w-3 h-3 w-3 transition-transform group-hover:translate-x-2" />
      <span className="ml-3 flex flex-col">
        {children}
        {subtitle && (
          <span className="text-small font-regular">{subtitle}</span>
        )}
      </span>
    </LinkWrapper>
  );
};
