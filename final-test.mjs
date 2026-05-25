import { launch } from 'chrome-launcher';
import lighthouse from 'lighthouse';

const chrome = await launch({ chromeFlags: ['--headless', '--no-sandbox'] });
const options = {
  logLevel: 'error',
  output: 'json',
  onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  port: chrome.port,
};

const runnerResult = await lighthouse('https://benkov-website.vercel.app/', options);
const { categories, audits } = runnerResult.lhr;

console.log('\n🎯 LIGHTHOUSE SCORES:');
console.log('Performance:    ', Math.round(categories.performance.score * 100));
console.log('Accessibility:  ', Math.round(categories.accessibility.score * 100));
console.log('Best Practices: ', Math.round(categories['best-practices'].score * 100));
console.log('SEO:            ', Math.round(categories.seo.score * 100));

console.log('\n❌ STILL FAILING:');
for (const [key, audit] of Object.entries(audits)) {
  if (audit.score !== null && audit.score < 1 && audit.score !== undefined) {
    console.log(`[${Math.round((audit.score||0)*100)}] ${audit.id}: ${audit.title}`);
    if (audit.displayValue) console.log('   →', audit.displayValue);
  }
}

await chrome.kill();
