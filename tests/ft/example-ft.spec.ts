import { test, expect } from '@playwright/test';
import { testActions } from '../../src/fixtures/actions.fixtures';

//V1 - SIMPLE WITHOUT FIXTURES ------------------------------------------------------------------------------
const DEMO_PAGE = 'https://playwright.dev/'
test('V1 has title', async ({ page }) => {
  await page.goto(DEMO_PAGE);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('V1 get started link', async ({ page }) => {
  await page.goto(DEMO_PAGE);

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

//V2 - WITH FIXTURES AND POM -----------------------------------------------------------------------------
testActions('V2 has title', async ({ page, loginToApp }) => {
  await loginToApp(); //FAILING WITH PW SITE WHY?

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

testActions('V2 get started link', async ({loginToApp, demoPage }) => {
  await loginToApp(); //FAILING WITH PW SITE  WHY?

  // Click the get started link.
  await demoPage.clickLinkGetStarted();

  // Expects page to have a heading with the name of Installation.
  await expect(demoPage.otherPageHeader).toBeVisible();
});
