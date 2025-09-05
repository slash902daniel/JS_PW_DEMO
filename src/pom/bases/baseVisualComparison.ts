import  {Page, Locator, expect} from '@playwright/test'

export class BaseVisualComparison {
    readonly page: Page

    constructor(page: Page){
        this.page = page;
    }



    async assertElementToHaveScreenshot(element: Locator, imageName: string, options?): Promise<void> {
        await expect(element).toHaveScreenshot(imageName, options);
    };

}