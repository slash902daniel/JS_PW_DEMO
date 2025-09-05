import  {Page, Locator, expect} from '@playwright/test'
import { BaseA11Y } from './baseA11Y';

export class BasePage extends BaseA11Y {
    readonly page: Page

    constructor(page: Page){
        super(page);
        this.page = page;
    }

    async goto(path: string): Promise<void> {
        this.page.goto(path);
        this.waitForPageToLoad();
    };

    async waitForPageToLoad(): Promise<void> {
        //Wait for some element or change
    };

}