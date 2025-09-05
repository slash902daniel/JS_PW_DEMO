import  {Page, Locator, expect} from '@playwright/test'
import { BaseVisualComparison } from './baseVisualComparison';
import { createHtmlReport } from "axe-html-reporter"; //For Custom HTML Report

export class BaseA11Y extends BaseVisualComparison {
    readonly page: Page

    constructor(page: Page){
        super(page);
        this.page = page;
    }

    /**
     * Create the report for a11y (friendly to read)
     */
    async createAxeHtmlReporter(accessibilityScanResults: any, reportUniqueName: string, dirPath: string): Promise<void> {
            createHtmlReport({
              results: accessibilityScanResults,
              options: {
                outputDir: dirPath,
                reportFileName: `${reportUniqueName}.html`,
              },
            });
    };

}