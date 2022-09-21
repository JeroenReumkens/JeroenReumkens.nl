import classNames from 'classnames';

export const Container: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div className={classNames('mx-auto w-full max-w-[128rem]', className)}>
    {children}
  </div>
);
