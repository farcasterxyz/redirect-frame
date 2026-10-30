import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const html = readFileSync(new URL('../.next/server/app/index.html', import.meta.url), 'utf8');

function metaContent(name) {
  const match = html.match(new RegExp(`<meta name="${name}" content="([^"]*)"/>`));
  return match?.[1];
}

test('home page renders the redirect frame meta tags', () => {
  assert.deepEqual(
    {
      'fc:frame': metaContent('fc:frame'),
      'fc:frame:button:1': metaContent('fc:frame:button:1'),
      'fc:frame:button:1:action': metaContent('fc:frame:button:1:action'),
      'fc:frame:image': metaContent('fc:frame:image'),
      'fc:frame:post_url': metaContent('fc:frame:post_url'),
    },
    {
      'fc:frame': 'vNext',
      'fc:frame:button:1': 'Click to unlock',
      'fc:frame:button:1:action': 'post_redirect',
      'fc:frame:image': 'https://redirect-frame.vercel.app/video.png',
      'fc:frame:post_url': 'https://redirect-frame.vercel.app/api/frame',
    },
  );
});
