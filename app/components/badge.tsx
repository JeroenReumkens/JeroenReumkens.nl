import classNames from 'classnames';
import { StarTwelveIcon } from './icons/star-twelve';

export interface BadgeProps {
  illustrationTitle: string;
  illustrationUrl: string;
  illustrationWidth: number;
  illustrationAlt: string;
  isReverse?: boolean;
  isFullImage?: boolean;
}

export const Badge = ({
  illustrationTitle,
  illustrationUrl,
  illustrationWidth,
  illustrationAlt,
  isReverse,
  isFullImage,
}: BadgeProps) => (
  <div
    className={classNames(
      'flex h-[500px] w-[310px] flex-col items-center overflow-hidden rounded-massive border',
      isReverse ? 'rotate-[-9deg]' : 'rotate-[9deg]'
    )}
  >
    {isFullImage ? (
      <span className="flex h-full w-full items-center justify-center bg-white">
        <img
          src={illustrationUrl}
          alt={illustrationAlt}
          width={illustrationWidth}
          className={`w-[${illustrationWidth}px]`}
        />
      </span>
    ) : (
      <span
        className="relative mt-5 block h-[150px] w-[150px]"
        style={{ clipPath: 'url(#star)' }}
      >
        <StarTwelveIcon />
        <img
          src={illustrationUrl}
          alt={illustrationAlt}
          width={illustrationWidth}
          className={`absolute left-1/2 top-1/2 max-h-[none] max-w-none -translate-x-1/2 -translate-y-1/2 w-[${illustrationWidth}px]`}
        />
      </span>
    )}
    <div className="grain mt-auto flex min-h-[40%] w-full items-center justify-center overflow-clip rounded-b-massive bg-gray40 px-2 text-center font-mono text-body uppercase text-white">
      {illustrationTitle}
    </div>
  </div>
);
