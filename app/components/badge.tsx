import classNames from 'classnames';

interface BadgeBaseProps {
  illustrationTitle: string;
  illustrationUrl: string;
  illustrationAlt: string;
  isReverse?: boolean;
}

export type BadgeProps = BadgeBaseProps | BageFullImageProps;

interface BageFullImageProps extends BadgeBaseProps {
  isFullImage?: boolean;
  illustrationWidth: number;
}

export const Badge = ({
  illustrationTitle,
  illustrationUrl,
  illustrationAlt,
  isReverse,
  ...props
}: BadgeProps) => (
  <div
    className={classNames(
      'flex h-[250px] w-[180px] flex-col items-center justify-center overflow-hidden rounded-massive border shadow-hard sm:h-[500px] sm:w-[310px]',
      isReverse ? 'rotate-[-9deg]' : 'rotate-[9deg]'
    )}
  >
    {'isFullImage' in props && props.isFullImage ? (
      <span className="flex h-full min-w-full items-center justify-center bg-white">
        <img
          loading="lazy"
          src={illustrationUrl}
          alt={illustrationAlt}
          width={props.illustrationWidth}
          className={`w-[${props.illustrationWidth}px]`}
        />
      </span>
    ) : (
      <span className="flex h-full min-w-full items-center justify-center">
        <figure className="h-[90px] w-[90px] sm:h-[180px] sm:w-[180px]">
          <img
            loading="lazy"
            src={illustrationUrl}
            alt={illustrationAlt}
            style={{
              WebkitMaskSize: 'cover',
              maskSize: 'cover',
              maskImage: 'url("/img/star-twelve.svg")',
              WebkitMaskImage: 'url("/img/star-twelve.svg")',
            }}
            className="h-full w-full max-w-none object-cover"
          />
        </figure>
      </span>
    )}
    <div className="grain mt-auto flex min-h-[40%] w-full items-center justify-center overflow-clip rounded-b-massive bg-gray40 px-2 text-center font-mono text-small uppercase text-white sm:text-body">
      {illustrationTitle}
    </div>
  </div>
);
