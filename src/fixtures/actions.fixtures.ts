import {testPages as base} from './pages.fixtures';
const { USER_NAME, USER_PWD, DUMMY_LOGIN } = process.env;

type ActionsFixtures = {
    loginToApp:() => Promise<void>;
}

export const testActions = base.extend<ActionsFixtures>({

    loginToApp: async ({page, loginPage}, use) =>{
        console.log(`Login called with USER_NAME: ${USER_NAME}`)
        console.log(`Login called with USER_PWD: ${USER_PWD}`)


        //TO DEBUG -------------------------------------------------
        page.on('requestfailed', (request) => {
            console.log("DEBUG1");
            console.log(request.failure().errorText);
        });

        //TO DEBUG -------------------------------------------------
        page.on('pageerror', (exception) => {
            console.log("DEBUG2");
            console.log(exception);
        });
        

        await page.goto('/');
        await loginPage.itemOnPage.waitFor();

        if (DUMMY_LOGIN) {
            console.log('Dummy Login called!')
        } else {
            await use(async() => {
            await  loginPage.setUserName(`${USER_NAME}`);
            await  loginPage.setPwd(`${USER_PWD}`);
            await  loginPage.clickSubmitButton();
        });
        } 

    }
})