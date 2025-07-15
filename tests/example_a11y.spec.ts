import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright'; // 1
import {createHtmlReport} from 'axe-html-reporter';

const HTML_REPORT_PATH = './pw-report-a11y'

test.describe('homepage', () => { // 2
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('https://your-site.com/'); // 3

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: HTML_REPORT_PATH,
        reportFileName: 'mytest1.html',
      }
    })

    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});

/* test('navigation menu should not have automatically detectable accessibility violations', async ({
  page,
}) => {
  await page.goto('https://your-site.com/');

  await page.getByRole('button', { name: 'Navigation Menu' }).click();

  // It is important to waitFor() the page to be in the desired
  // state *before* running analyze(). Otherwise, axe might not
  // find all the elements your test expects it to scan.
  await page.locator('#navigation-menu-flyout').waitFor();

  const accessibilityScanResults = await new AxeBuilder({ page })
      .include('#navigation-menu-flyout')
      .analyze();

    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: HTML_REPORT_PATH,
        reportFileName: 'mytest2.html',
      }
    })
      
  expect(accessibilityScanResults.violations).toEqual([]);
}); */

test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
  await page.goto('https://your-site.com/');

  const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

  createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: HTML_REPORT_PATH,
        reportFileName: 'mytest3.html',
      }
    })

  expect(accessibilityScanResults.violations).toEqual([]);
});

test('should not have any accessibility violations outside of elements with known issues', async ({
  page,
}) => {
  await page.goto('https://your-site.com/page-with-known-issues');

  const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('#element-with-known-issue')
      .analyze();

          createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: HTML_REPORT_PATH,
        reportFileName: 'mytest4.html',
      }
    })

  expect(accessibilityScanResults.violations).toEqual([]);
});
