import {test as base} from '@playwright/test';
import * as pom from '../pom';

type PageFixtures = {
    loginPage: pom.LoginPage;
    demoPage: pom.DemoPage;
}
export const testPages = base.extend<PageFixtures>({
    loginPage: async ({page}, use) =>{
        await use(new pom.LoginPage(page));
    },
    demoPage: async ({page}, use) =>{
        await use(new pom.DemoPage(page));
    }
})