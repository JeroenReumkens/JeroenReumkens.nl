import { animate, scroll } from 'motion';
import { forwardRef, useRef } from 'react';
import { useMotion } from '~/utils/use-motion';

export const OldSkoolWebsiteFrame = forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    className="sticky top-[0] h-screen max-h-[100vw] w-full bg-[url(/img/planets.jpeg)] sm:max-h-screen [&_img]:max-w-[100vw]"
  >
    <div className="flex h-full w-full">
      <div className="relative z-10 min-w-[20%] overflow-scroll border-r border-r-[#999] bg-[url(/img/planets.jpeg)] bg-[length:100px_100px] shadow-[1px_0_0_0_rgb(237,237,237)] sm:w-[15%] sm:min-w-0">
        <img
          loading="lazy"
          src="/img/gifs/ad.gif"
          width="150%"
          className="mt-4 ml-2 -rotate-12"
          alt="Old skool animated GIF selling fake ad space"
        />
        <p className="mt-4 ml-2 font-['comic_sans_MS'] text-[12px] text-[#02FF2B] sm:text-small">
          Everyone needs a cool website!!! I can also build these cool websites
          for you!!! Click the button below to contact me!!!!!!!!
        </p>
        {Array.from({ length: 4 }).map((_, i) => (
          <img
            key={i}
            loading="lazy"
            src="/img/gifs/email.gif"
            width="80%"
            className="mt-4 ml-2"
            alt="Spinning email logo"
          />
        ))}
      </div>
      <div className="flex w-full flex-col">
        <div className="flex h-6 items-center overflow-scroll border-b border-b-[#999] bg-[url(/img/planets.jpeg)] shadow-[0_1px_0_0_rgb(237,237,237)]">
          <img
            loading="lazy"
            src="/img/gifs/home.gif"
            width="100px"
            className="ml-auto mt-4"
            alt="Animated GIF of a home button"
          />
          <img
            loading="lazy"
            src="/img/gifs/links.gif"
            width="100px"
            className="mt-4 ml-4"
            alt="Animated GIF of a link button"
          />
          <img
            loading="lazy"
            src="/img/gifs/guestbook.gif"
            width="100px"
            className="mt-4 ml-4 mr-4"
            alt="Animated GIF of a guestbook button"
          />
        </div>
        <div className="relative h-full">
          <img
            loading="lazy"
            src="/img/gifs/welcome.png"
            width="50%"
            className="absolute top-[10%] left-1/2 -translate-x-1/2"
            alt="Welcome to my website title"
          />
          <img
            loading="lazy"
            src="/img/gifs/shuttle.gif"
            width="8%"
            className="absolute right-[5%] top-[50%]"
            alt="Low pixel GIF of a space shuttle"
          />
          <img
            loading="lazy"
            src="/img/gifs/shuttle2.gif"
            width="35%"
            className="absolute left-[15%] top-[40%]"
            alt="Low pixel GIF of a space shuttle"
          />
          <img
            loading="lazy"
            src="/img/gifs/next.gif"
            width="20%"
            className="absolute right-[5%] top-[80%]"
            alt="Animated GIF a button saying NEXT, implying that nextjs was already a thing back then"
          />
          <img
            loading="lazy"
            src="/img/gifs/planet.gif"
            width="20%"
            className="absolute left-[70%] top-[25%]"
            alt="Animated GIF of a guestbook button"
          />
          <img
            loading="lazy"
            src="/img/gifs/construction.gif"
            width="80%"
            className="absolute left-4 bottom-5"
            alt="Animated GIF of a guestbook button"
          />
          <img
            loading="lazy"
            src="/img/gifs/webmaster.gif"
            width="45%"
            className="absolute left-4 bottom-4"
            alt="Animated GIF of a guestbook button"
          />
        </div>
      </div>
    </div>
  </div>
));

export const OldSkoolWebsite = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  useMotion([containerRef, screenRef], ([container, screen]) => {
    scroll(
      animate(screen, {
        scale: [8, 2, 1],
      }),
      {
        target: container,
        offset: ['start end', 'center end', 0.92],
      }
    );
  });
  return (
    <div ref={containerRef} className="relative min-h-[200vh]">
      <OldSkoolWebsiteFrame ref={screenRef} />
    </div>
  );
};
