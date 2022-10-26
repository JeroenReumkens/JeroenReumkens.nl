import classNames from 'classnames';
import Link from 'next/link';
import { DoubleArrowIcon } from './icons/double-arrow';

interface CtaButtonProps {
  children: React.ReactNode;
  subtitle?: string;
  href: string;
  className?: string;
  variant?: 'small' | 'large';
  soon?: boolean;
}

interface LinkWrapperProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const LinkWrapper = ({ children, href, className }: LinkWrapperProps) => {
  const isHash = href.startsWith('#');
  const linkIsInteral = !isHash && !href.startsWith('http');

  return linkIsInteral ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      href={href}
      target={!isHash ? '_blank' : undefined}
      rel={!isHash ? 'noreferrer' : undefined}
      className={className}
    >
      {children}
    </a>
  );
};

export const CtaButton = ({
  children,
  href,
  subtitle,
  className,
  variant = 'large',
  soon,
}: CtaButtonProps) => {
  return (
    <LinkWrapper
      href={href}
      className={classNames(
        'group relative inline-flex items-center border text-left font-serif font-medium leading-tight text-[currentColor] shadow-hard transition-colors hover:bg-white hover:text-black',
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
