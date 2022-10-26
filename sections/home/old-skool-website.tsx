'use client';

import { animate, scroll } from 'motion';
import Image from 'next/image';
import { forwardRef, useRef } from 'react';
import { useMotion } from '~/utils/use-motion';
import adGif from '~/public/img/gifs/ad.webp';
import mailGif from '~/public/img/gifs/email.webp';
import homeGif from '~/public/img/gifs/home.webp';
import linksGif from '~/public/img/gifs/links.webp';
import guestbookGif from '~/public/img/gifs/guestbook.webp';
import welcomeImage from '~/public/img/gifs/welcome.png';
import shuttleGif from '~/public/img/gifs/shuttle.webp';
import shuttle2Gif from '~/public/img/gifs/shuttle2.webp';
import nextGif from '~/public/img/gifs/next.webp';
import planetGif from '~/public/img/gifs/planet.webp';
import constructionGif from '~/public/img/gifs/construction.webp';
import webmasterGif from '~/public/img/gifs/webmaster.webp';

export const OldSkoolWebsiteFrame = forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    className="sticky top-[120px] h-screen max-h-[100vw] w-full bg-[url(/img/planets.jpeg)] sm:max-h-screen md:top-[0] [&_img]:max-w-[100vw]"
  >
    <div className="flex h-full w-full">
      <div className="relative z-10 min-w-[20%] overflow-scroll border-r border-r-[#999] bg-[url(/img/planets.jpeg)] bg-[length:100px_100px] shadow-[1px_0_0_0_rgb(237,237,237)] sm:w-[15%] sm:min-w-0">
        <Image
          loading="lazy"
          src={adGif}
          className="mt-4 ml-2 w-[150%] -rotate-12"
          alt="Old skool animated GIF selling fake ad space"
        />
        <p className="mt-4 ml-2 font-['comic_sans_MS'] text-[12px] text-[#02FF2B] sm:text-small">
          Everyone needs a cool website!!! I can also build these cool websites
          for you!!! Click the button below to contact me!!!!!!!!
        </p>
        {Array.from({ length: 4 }).map((_, i) => (
          <Image
            key={i}
            loading="lazy"
            src={mailGif}
            className="mt-4 ml-2 w-[80%]"
            alt="Spinning email logo"
          />
        ))}
      </div>
      <div className="flex w-full flex-col">
        <div className="flex h-6 items-center overflow-scroll border-b border-b-[#999] bg-[url(/img/planets.jpeg)] shadow-[0_1px_0_0_rgb(237,237,237)]">
          <Image
            loading="lazy"
            src={homeGif}
            width="100"
            className="ml-4 mt-4"
            alt="Animated GIF of a home button"
          />
          <Image
            loading="lazy"
            src={linksGif}
            width="100"
            className="mt-4 ml-4"
            alt="Animated GIF of a link button"
          />
          <Image
            loading="lazy"
            src={guestbookGif}
            width="100"
            className="mx-4 mt-4"
            alt="Animated GIF of a guestbook button"
          />
        </div>
        <div className="relative h-full">
          <Image
            loading="lazy"
            src={welcomeImage}
            className="absolute top-[10%] left-1/2 w-1/2 -translate-x-1/2"
            alt="Welcome to my website title"
          />
          <Image
            loading="lazy"
            src={shuttleGif}
            className="absolute right-[5%] top-[50%] w-[8%]"
            alt="Low pixel GIF of a space shuttle"
          />
          <Image
            loading="lazy"
            src={shuttle2Gif}
            className="absolute left-[15%] top-[40%] w-[35%]"
            alt="Low pixel GIF of a space shuttle"
          />
          <Image
            loading="lazy"
            src={nextGif}
            className="absolute right-[5%] top-[80%] w-[20%]"
            alt="Animated GIF a button saying NEXT, implying that nextjs was already a thing back then"
          />
          <Image
            loading="lazy"
            src={planetGif}
            className="absolute left-[70%] top-[25%] w-[20%]"
            alt="Animated GIF of a planet with small planets floating around it"
          />
          <Image
            loading="lazy"
            src={constructionGif}
            className="absolute left-4 bottom-5 w-[80%]"
            alt="Animated GIF of a retro under construction sign for a website"
          />
          <Image
            loading="lazy"
            src={webmasterGif}
            className="absolute left-4 bottom-4 w-[45%]"
            alt="Animated GIF with the text webmaster jeroen"
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
