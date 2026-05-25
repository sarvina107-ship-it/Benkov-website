import { launch } from 'chrome-launcher';
import lighthouse from 'lighthouse';

const chrome = await launch({ chromeFlags: ['--headless', '--no-sandbox'] });
const options = {
  logLevel: 'error',
  output: 'json',
  onlyCategories: ['accessibility', 'best-practices', 'performance'],
  port: chrome.port,
};

const result = await lighthouse('https://benkov-website.vercel.app/', options);
const { audits } = result.lhr;

// Color contrast details
const cc = audits['color-contrast'];
if (cc?.details?.items) {
  console.log('\n=== COLOR CONTRAST FAILURES ===');
  cc.details.items.forEach(item => {
    console.log('Snippet:', item.node?.snippet?.slice(0, 150));
    console.log('Explanation:', item.node?.explanation);
    console.log('---');
  });
}

// bf-cache details
const bf = audits['bf-cache'];
if (bf?.details?.items) {
  console.log('\n=== BF-CACHE FAILURES ===');
  bf.details.items.forEach(item => {
    console.log(JSON.stringify(item, null, 2).slice(0, 1000));
  });
}

// render-blocking details
const rb = audits['render-blocking-insight'];
if (rb?.details?.items) {
  console.log('\n=== RENDER BLOCKING ===');
  rb.details.items.forEach(item => {
    console.log(JSON.stringify(item, null, 2).slice(0, 500));
  });
}

// unused-js details
const uj = audits['unused-javascript'];
if (uj?.details?.items) {
  console.log('\n=== UNUSED JS ===');
  uj.details.items.slice(0, 5).forEach(item => {
    console.log(item.url?.split('/').pop(), '-', item.wastedBytes, 'bytes wasted');
  });
}

await chrome.kill();
