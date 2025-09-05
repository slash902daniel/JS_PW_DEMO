# Playwright Test Framework

## Purpose
Simple Demo project to show the capabilities for this framework and it´s capabilities:<br/>
- Functional Tests (FT´s)<br/>
- A11Y (Accesibility)<br/>
- Visual Compare<br/>
- API Mocking    --> TODO<br/>

## Configuration Files
| COFIG FILE NAME       | ABOUT                                          |
|-----------------------|------------------------------------------------|
|`playwright.config.ts` | Basic parameters/configuration for the project |

## FT's - Functional Test
Standard UI testing, for this demo we are NOT focusing on the POM/Support, as the focus is to show the execution/assertions

## A11Y - Accesibility Test
Uses `axe-core/playwright` for accesibility Scan.<br/>
Approach for scan, can be: Full Page / Atomic.<br/>
Also we can especify elements to add/remove (Like Elements with known issues or common elements).<br/>
HTML Custom Rerpots are generated in addition to the standard PW Reports, this to enhance the understanding of the findings.

## Visual Comparison Test
Focus on Get image and compare vs saved ones, depends on the actual host executor to take the new image.


## References
- [Playwright Documentation] (https://playwright.dev/docs/intro)
- [Playwright - Image Compare] (https://playwright.dev/docs/test-snapshots)
- [Playwright - API Mocks] (https://playwright.dev/docs/mock-browser-apis)
- [axe-core/playwright] (https://github.com/axe-core/axe-playwright)

## How to Execute:
| TYPE OF TEST                | COMMAND LINE TO EXECUTE TESTS | EXECUTION RESULTS WILL BE STORED IN      |
|-----------------------------|-------------------------------|------------------------------------------|
| FT´s                        | npx playwright test           | ./playwright-report                      |
| A11Y - Accesibility Test    | npx playwright test           | ./playwright-report and ./pw-report-a11y |
| Visual Compare              | npx playwright test           | ./playwright-report                      |

