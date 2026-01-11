import {expect, test} from "@playwright/test";
import LoginActions from "../PageObject/login/loginAction";
import AddToCartActions from "../PageObject/addToCart/addToCartAction";
const fullname = "locked_out_user";
const password = "secret_sauce";
test.describe ("Swag Labs site login test journeys", () => {
    let login, addToCart;
    test.beforeEach (async ({page})=> {
            login = new LoginActions (page);
            addToCart = new AddToCartActions (page);
            await page.goto ("https://www.saucedemo.com/");
        });

    test ("Unsuccessfully login with invalid information", async({page}) =>{

    
        await login.enterUsername (fullname);
        await page.waitForTimeout(2000);
        await login.enterPassword (password);
        await page.waitForTimeout(2000);
        await login.clickOnLoginButton();
        await page.waitForTimeout(2000);
        const expectedText = "Epic sadface: Sorry, this user has been locked out.";
        const actualText = await login.getInvalidMessage();
        expect(actualText).toEqual(expectedText);

    });
});



