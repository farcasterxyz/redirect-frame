import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import Image from 'next/image';

const frameMetadata = getFrameMetadata({
  buttons: [
    { label: 'Click to unlock', action: 'post_redirect' }
  ],
  image: 'https://redirect-frame.vercel.app/video.png',
  post_url: 'https://redirect-frame.vercel.app/api/frame',
});

export const metadata: Metadata = {
  title: 'Redirect Frame',
  description: 'Unlock content with our redirect frame.',
  openGraph: {
    title: 'Redirect Frame',
    description: 'Unlock content with our redirect frame.',
    images: ['https://redirect-frame.vercel.app/video.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <Image 
      src={'/video.png'} 
      alt='Video thumbnail' 
      width={500} // Adjust width as needed
      height={300} // Adjust height as needed
    />
  );
}
