import { launch } from 'chrome-launcher';
import lighthouse from 'lighthouse';

const chrome = await launch({ chromeFlags: ['--headless', '--no-sandbox'] });
const result = await lighthouse('https://benkov-website.vercel.app/', {
  logLevel: 'error', output: 'json',
  onlyCategories: ['performance'], port: chrome.port,
});
const { audits } = result.lhr;

console.log('FCP:', audits['first-contentful-paint'].displayValue);
console.log('LCP:', audits['largest-contentful-paint'].displayValue);
console.log('TBT:', audits['total-blocking-time'].displayValue);
console.log('Speed Index:', audits['speed-index'].displayValue);
console.log('TTI:', audits['interactive'].displayValue);
console.log('CLS:', audits['cumulative-layout-shift'].displayValue);

// Image delivery details
const imgDel = audits['image-delivery-insight'];
if (imgDel?.details?.items) {
  console.log('\n=== IMAGE DELIVERY (savings available) ===');
  imgDel.details.items.forEach(i => {
    if (i.url) console.log(i.url.split('/').pop(), '->', i.displayValue || '');
  });
}

// Network dependency tree
const net = audits['network-dependency-tree-insight'];
if (net?.details) {
  console.log('\n=== NETWORK DEPS ===', net.displayValue);
}

// Unused JS
const uj = audits['unused-javascript'];
if (uj?.details?.items) {
  console.log('\n=== UNUSED JS ===');
  uj.details.items.forEach(i => {
    const kb = Math.round(i.wastedBytes/1024);
    console.log(i.url?.split('/').pop(), '-', kb + 'KB wasted');
  });
}

// LCP element
const lcpEl = audits['largest-contentful-paint-element'];
if (lcpEl?.details?.items) {
  console.log('\n=== LCP ELEMENT ===', JSON.stringify(lcpEl.details.items[0], null, 2).slice(0, 300));
}

await chrome.kill();
