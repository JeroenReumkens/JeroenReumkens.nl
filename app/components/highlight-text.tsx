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
    <p className="relative z-10 sm:w-[75%]">
      {line1}
      <IconLeft
        aria-hidden
        className="pointer-events-none absolute -top-[60px] z-[0] h-4 w-4 rotate-12 sm:-top-[100px] md:h-6 md:w-6"
      />
    </p>

    <p className="relative mt-3 font-medium sm:mt-5 sm:ml-col sm:w-[60%]">
      <IconRight
        aria-hidden
        className="pointer-events-none absolute top-full -right-[20px] z-[0] h-5 w-5 -rotate-12 sm:top-auto sm:-bottom-[30px] sm:-right-[120px] md:h-6 md:w-6"
      />
      <span className="relative z-10">{line2}</span>
    </p>
  </div>
);
