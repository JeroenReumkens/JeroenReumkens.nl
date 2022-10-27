'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import WebsitePreviewImg from '../../public/img/old-skool--website-preview.jpg';
import Image from 'next/image';

const LazyOldskoolWebsite = dynamic(() => import('./old-skool-website'), {
  suspense: true,
});

export const OldSkoolWebsiteWithPreload = () => {
  return (
    <Suspense
      fallback={
        <div className="h-full w-full [&_img]:h-full [&_img]:w-full">
          <Image src={WebsitePreviewImg} alt="Preview of animated website" />
        </div>
      }
    >
      <LazyOldskoolWebsite />
    </Suspense>
  );
};
