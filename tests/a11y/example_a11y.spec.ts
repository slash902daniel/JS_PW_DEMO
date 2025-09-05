import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright"; // For A11Y Scan
import { createHtmlReport } from "axe-html-reporter"; //For Custom HTML Report

const CUSTOM_HTML_REPORT_PATH = "./pw-report-a11y";

test.describe("A11Y - Examples focus on Scan Configuration", () => {
  test("1. should demo a scan configuration - with Tags", async ({ page }) => {
    await page.goto("https://your-site.com/");

    //Simple scan, (Define the wcag versions to use with the SCAN)
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    //Assertion
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("A11Y - Examples focus on Scan Approach and Scope: General Scan / Atomic Scan / Include / Exclude", () => {
  test("1. should demo a simple scan - for full page", async ({ page }) => {
    await page.goto("https://your-site.com/");

    //Simple scan, (To the full page, nothing excluded)
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    //Assertion
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("2. should demo a simple scan - for a particular element (Atomic)", async ({
    page,
  }) => {
    await page.goto("https://your-site.com/");

    await page.getByRole("button", { name: "Navigation Menu" }).click();

    // It is important to waitFor() the page to be in the desired
    // state *before* running analyze(). Otherwise, axe might not
    // find all the elements your test expects it to scan.
    await page.locator("#navigation-menu-flyout").waitFor();

    //Simple scan, (To a particular element)
    const accessibilityScanResults = await new AxeBuilder({ page })
      .include("#navigation-menu-flyout")
      .analyze();

    //Assertion
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("3. should demo a simple scan - avoid known issues / common elements", async ({
    page,
  }) => {
    await page.goto("https://your-site.com/page-with-known-issues");

    //Simple scan, (exclude elements with known issues / elements that are common in all pages, to avoid duplicated findings)
    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude("#element-with-known-issue")
      .exclude("#common-header")
      .analyze();

    //Assertion
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("A11Y - Examples focus on Custom HTML Report", () => {
  test("1. should scan for A11Y vulnerability and results wil lbe logged to the default PW Report", async ({
    page,
  }) => {
    await page.goto("https://your-site.com/");
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    /*     createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: HTML_REPORT_PATH,
        reportFileName: "mytest1.html",
      },
    }); */

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("2. should scan for A11Y vulnerability and results will be logged to custom HTML Report", async ({
    page,
  }, testinfo) => {
    await page.goto("https://your-site.com/");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    const uniqueNameForReport = 'mytest1.html'

    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: CUSTOM_HTML_REPORT_PATH,
        reportFileName: uniqueNameForReport,
      },
    });

    //To export as attachement in the PW report (For easy copy/paste)
    await testinfo.attach(uniqueNameForReport, {
      body: JSON.stringify(accessibilityScanResults.violations, null, 2),
      contentType: 'application/json',
    })

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
