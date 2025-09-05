import  {Page, Locator, expect} from '@playwright/test'
import { BasePage } from '../bases/basePage';

export class DemoPage extends BasePage {
    readonly page: Page

    readonly linkgGetStarted: Locator;
    readonly otherPageHeader: Locator;

    constructor(page: Page){
        super(page);
        this.page = page;
        this.linkgGetStarted = this.page.getByRole('link', { name: 'Get started' });
        this.otherPageHeader = this.page.getByRole('heading', { name: 'Installation' });
    }

    async clickLinkGetStarted(): Promise<void> {
        this.linkgGetStarted.click();
    };

}