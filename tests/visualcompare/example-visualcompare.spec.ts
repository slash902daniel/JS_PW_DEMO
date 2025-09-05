import { testActions } from '../../src/fixtures/actions.fixtures';

testActions('1. Should Demo visual compare', async ({demoPage }) => {
  await demoPage.goto('https://playwright.dev/');

  //ASSERT IMAGE
  await demoPage.assertElementToHaveScreenshot(demoPage.linkgGetStarted, "ExpectedImageDemo1.png"), {
      maxDiffPixelRatio: 0.07
  };

});
