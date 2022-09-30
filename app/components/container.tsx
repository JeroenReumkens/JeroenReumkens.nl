import classNames from 'classnames';
import { forwardRef } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, id }, ref) => (
    <div
      id={id}
      ref={ref}
      className={classNames(
        'mx-auto w-full max-w-[128rem] px-4 lg:px-[0]',
        className
      )}
    >
      {children}
    </div>
  )
);
