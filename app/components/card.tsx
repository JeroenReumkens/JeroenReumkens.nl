export const CardGroup = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-5 flex flex-col justify-between md:flex-row  [&_>div]:md:w-[calc(50%-2rem)]">
    {children}
  </div>
);

export const Card = ({
  children,
  title,
  id,
}: {
  children: React.ReactNode;
  title: string;
  id?: string;
}) => (
  <div
    id={id}
    className="mb-4 space-y-3 rounded-massive border bg-white px-3 py-4 shadow-hard sm:px-4 sm:py-5 md:mb-[0]"
  >
    <h3 className="text-lg md:text-2xl">{title}</h3>
    <div className="space-y-3 text-small md:text-body">{children}</div>
  </div>
);
