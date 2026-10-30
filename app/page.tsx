import type { Metadata } from 'next';

const frameMetadata = {
  'fc:frame': 'vNext',
  'fc:frame:button:1': 'Click to unlock',
  'fc:frame:button:1:action': 'post_redirect',
  'fc:frame:image': 'https://redirect-frame.vercel.app/video.png',
  'fc:frame:post_url': 'https://redirect-frame.vercel.app/api/frame',
};

export const metadata: Metadata = {
  title: 'Redirect frame',
  description: 'LFG',
  openGraph: {
    title: 'Redirect frame',
    description: 'LFG',
    images: ['https://redirect-frame.vercel.app/video.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <img src={'/video.png'}/>
    </>
  );
}
