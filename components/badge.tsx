import classNames from 'classnames';
import Image from 'next/image';

interface BadgeBaseProps {
  illustrationTitle: string;
  illustrationUrl: string;
  illustrationAlt: string;
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
  ...props
}: BadgeProps) => (
  <div
    className={classNames(
      'mx-auto flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border shadow-hard sm:h-[500px] sm:w-[400px] sm:max-w-[90%] sm:rounded-massive'
    )}
  >
    {'isFullImage' in props && props.isFullImage ? (
      <span className="flex h-full min-w-full items-center justify-center bg-white">
        <Image
          src={illustrationUrl}
          alt={illustrationAlt}
          className={`w-[${props.illustrationWidth}px]`}
          width={props.illustrationWidth}
          height={props.illustrationWidth}
        />
      </span>
    ) : (
      <span className="flex h-full min-w-full items-center justify-center bg-white">
        <figure className="h-[90px] w-[90px] sm:h-[180px] sm:w-[180px]">
          <Image
            src={illustrationUrl}
            alt={illustrationAlt}
            style={{
              WebkitMaskSize: 'cover',
              maskSize: 'cover',
              maskImage: 'url("/img/star-twelve.svg")',
              WebkitMaskImage: 'url("/img/star-twelve.svg")',
            }}
            className="h-full w-full max-w-none object-cover"
            width="180"
            height="180"
          />
        </figure>
      </span>
    )}
    <div className="grain mt-auto flex min-h-[40%] w-full items-center justify-center overflow-clip rounded-b-lg bg-gray40 px-2 text-center font-mono text-small uppercase text-white sm:rounded-b-massive sm:text-body">
      {illustrationTitle}
    </div>
  </div>
);
