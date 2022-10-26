import Image from 'next/image';
import type { MouseEvent } from 'react';
import { useState } from 'react';
import { forwardRef } from 'react';
import { GoogleEyes, setGooglyPosition } from './google-eyes';
import whoDisImage from '~/public/img/who-dis.jpg';
import googlyDogGif from '~/public/img/googly-dog.webp';

export const GooglyPicture = forwardRef<HTMLImageElement>((_, ref) => {
  const [dogZoom, setDogZoom] = useState(1);
  const maxZoomReached = dogZoom > 8;

  const updateCursorPos = (ev: MouseEvent<HTMLImageElement>) => {
    const rekt = ev.currentTarget.getBoundingClientRect();
    const x = ev.clientX - rekt.left;
    const y = ev.clientY - rekt.top;
    if (ref && 'current' in ref && ref.current)
      setGooglyPosition(x, y, ref.current);
  };

  return (
    <div
      id="googly-wrapper"
      ref={ref}
      className="relative rounded-massive border shadow-hard"
    >
      <Image
        onMouseMove={updateCursorPos}
        onClick={() => {
          if (maxZoomReached) return;
          setDogZoom((zoom) => zoom * 1.25);
        }}
        className="peer rounded-[inherit]"
        style={{
          cursor: maxZoomReached
            ? undefined
            : 'url("data:image/svg+xml,%3Csvg%20width%3D%2245%22%20height%3D%2245%22%20viewBox%3D%220%200%2030%2030%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M13.9415%209.61938C11.6741%209.61938%209.83582%2011.4583%209.83582%2013.7257C9.83582%2015.9935%2011.6741%2017.8319%2013.9415%2017.8319C16.2093%2017.8319%2018.0475%2015.9936%2018.0475%2013.7257C18.0476%2011.4583%2016.2095%209.61938%2013.9415%209.61938ZM15.9256%2014.6973H14.7196V15.9033C14.7196%2016.3331%2014.3713%2016.6814%2013.9415%2016.6814C13.5117%2016.6814%2013.1634%2016.3331%2013.1634%2015.9033V14.6973H11.9574C11.5275%2014.6973%2011.1792%2014.349%2011.1792%2013.9192C11.1792%2013.4893%2011.5275%2013.141%2011.9574%2013.141H13.1634V11.9347C13.1634%2011.5049%2013.5117%2011.1566%2013.9415%2011.1566C14.3713%2011.1566%2014.7196%2011.5049%2014.7196%2011.9347V13.141H15.9256C16.3554%2013.141%2016.7037%2013.4893%2016.7037%2013.9192C16.7037%2014.349%2016.3556%2014.6973%2015.9256%2014.6973Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M14.9998%200C6.71571%200%200%206.71591%200%2014.9998C0%2023.2836%206.71571%2030.0003%2014.9998%2030.0003C23.2838%2030.0003%2030%2023.2839%2030%2014.9998C30%206.71561%2023.2839%200%2014.9998%200ZM22.5441%2022.1258C22.307%2022.3634%2021.9961%2022.4819%2021.6851%2022.4819C21.3741%2022.4819%2021.0634%2022.3634%2020.8257%2022.1258L17.4112%2018.711C16.4275%2019.3973%2015.2318%2019.8006%2013.9414%2019.8006C10.5866%2019.8006%207.86713%2017.081%207.86713%2013.7261C7.86713%2010.3713%2010.5866%207.65183%2013.9414%207.65183C17.2963%207.65183%2020.0159%2010.3713%2020.0159%2013.7258C20.0159%2014.9113%2019.6751%2016.0168%2019.0879%2016.9515L22.544%2020.4077C23.0188%2020.882%2023.0188%2021.6516%2022.5441%2022.1258Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E%0A") 30 30, pointer',
        }}
        src={whoDisImage}
        alt="Me wearing glasses, a white blouse and having a very short beard, sitting in a coffee bar."
        placeholder="blur"
      />
      <GoogleEyes wrapperRef={ref} />
      <Image
        loading="lazy"
        className="pointer-events-none absolute left-[0] top-[0] h-full w-full rounded-[inherit] object-cover opacity-0 transition-[opacity_clipPath] duration-500 ease-in-out peer-hover:opacity-100"
        style={
          {
            '--dog-zoom': dogZoom,
            clipPath:
              'circle(calc(var(--dog-zoom) * 100px) at var(--googly-x) var(--googly-y))',
          } as React.CSSProperties
        }
        src={googlyDogGif}
        alt="An animated gif of a dog wearing glasses with googly eyes. They have a bone in their mouth which a human tries to pull out of dog's mouth, causing the googly eyes to bounce around."
        placeholder="blur"
      />
    </div>
  );
});
