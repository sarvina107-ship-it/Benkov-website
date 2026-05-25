import { launch } from 'chrome-launcher';
import lighthouse from 'lighthouse';

const chrome = await launch({ chromeFlags: ['--headless', '--no-sandbox'] });

const run = async () => {
  const options = {
    logLevel: 'error',
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
  };
  const result = await lighthouse('https://benkov-website.vercel.app/', options);
  const { categories, audits } = result.lhr;

  console.log('\n🎯 LIGHTHOUSE FINAL SCORES:');
  console.log('Performance:    ', Math.round(categories.performance.score * 100));
  console.log('Accessibility:  ', Math.round(categories.accessibility.score * 100));
  console.log('Best Practices: ', Math.round(categories['best-practices'].score * 100));
  console.log('SEO:            ', Math.round(categories.seo.score * 100));

  const failing = Object.values(audits).filter(a => a.score !== null && a.score < 1);
  console.log(`\n❌ Remaining issues (${failing.length}):`);
  failing.forEach(a => {
    const cat = a.id;
    console.log(`  [${Math.round((a.score||0)*100)}] ${cat}`);
    if (a.details?.items?.[0]?.node?.explanation) {
      console.log('     →', a.details.items[0].node.explanation.slice(0, 200));
    }
  });
};

await run();
await chrome.kill();
