import  {Page, Locator, expect} from '@playwright/test'
import { BasePage } from '../bases/basePage';

export class LoginPage extends BasePage {
    readonly page: Page

    readonly userInput: Locator;
    readonly pwdInput: Locator;
    readonly submitButton: Locator;
    readonly itemOnPage: Locator;

    constructor(page: Page){
        super(page);
        this.page = page;

        this.itemOnPage = this.page.getByRole('link', { name: 'Get started' });

        this.userInput = this.page.getByTestId('user-test-id');
        this.pwdInput = this.page.getByTestId('user-pwd-id');
        this.submitButton = this.page.getByTestId('button-id');
    }

    

    async setUserName(name: string): Promise<void> {
        this.userInput.fill(name);
    };

    async setPwd(pwd: string): Promise<void> {
        this.userInput.fill(pwd);
    };

    async clickSubmitButton(): Promise<void> {
        this.submitButton.click();
    };

}