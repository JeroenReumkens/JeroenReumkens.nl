interface HighlightTextProps {
  line1: string;
  line2: string;
  iconLeft: React.ElementType;
  iconRight: React.ElementType;
}

export const HighlightText = ({
  line1,
  line2,
  iconLeft: IconLeft,
  iconRight: IconRight,
}: HighlightTextProps) => (
  <div className="font-serif text-body font-regular leading-tight sm:text-2xl">
    <p className="relative z-10 sm:w-[75%]">{line1}</p>

    <p className="relative mt-3 font-medium sm:mt-5 sm:ml-col sm:w-[60%]">
      <IconLeft
        aria-hidden
        className="pointer-events-none absolute -top-[200px] z-[0] h-6 w-6 rotate-12 sm:-left-[200px] sm:-top-[100px]"
      />
      <IconRight
        aria-hidden
        className="pointer-events-none absolute top-full -right-[20px] z-[0] h-6 w-6 -rotate-12 sm:top-auto sm:-bottom-[30px] sm:-right-[120px]"
      />
      <span className="relative z-10">{line2}</span>
    </p>
  </div>
);
