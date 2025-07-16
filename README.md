# Playwright Test Framework

## Purpose
Simple Demo project to show the capabilities for this framework and it´s capabilities:
-Functional Tests (FT´s)
-A11Y (Accesibility) 
-Visual Compare --> TODO
-API Mocking --> TODO

## Configuration Files
| COFIG FILE NAME       | ABOUT                                          |
|-----------------------|------------------------------------------------|
|`playwright.config.ts` | Basic parameters/configuration for the project |

## FT's - Functional Test
Standard UI testing, for this demo we are NOT focusing on the POM/Support, as thefocus is to show the execution/assertions

## A11Y - Accesibility Test
Uses `axe-core/playwright` for accesibility Scan
Approach for scan, can be: Full Page / Atomic, also we can especify elements to add/remove (Like Elements with known issues or common elements)
HTML Custom Rerpots are generated in addition to the standard PW Reports, this to enhance the understanding of the findings.

## References
- [Playwright Documentation] (https://playwright.dev/docs/intro)
- [axe-core/playwright] (https://github.com/axe-core/axe-playwright)

## How to Execute:
| TYPE OF TEST                | COMMAND LINE TO EXECUTE TESTS | EXECUTION RESULTS WILL BE STORED IN      |
|-----------------------------|-------------------------------|------------------------------------------|
| FT´s                        | npx playwright test           | ./playwright-report                      |
| A11Y - Accesibility Test    | npx playwright test           | ./playwright-report and ./pw-report-a11y |

