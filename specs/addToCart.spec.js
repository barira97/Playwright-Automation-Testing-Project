import {expect, test} from "@playwright/test";
import LoginActions from "/SQA Course/Project/PageObject/login/loginAction";
import AddToCartActions from "../PageObject/addToCart/addToCartAction";
const fullname2 = "standard_user";
const password = "secret_sauce";
test.describe ("Swag Labs site add to cart 3 items test journeys", () => {
    let login, addToCart;
    test.beforeEach (async ({page})=> {
        login = new LoginActions (page);
        addToCart = new AddToCartActions (page);
        await page.goto ("https://www.saucedemo.com/");
    });

    test ("Successfully add the products and Checkout", async({page}) =>{

        await addToCart.enterUsername (fullname2);
        await page.waitForTimeout(2000);
        await login.enterPassword (password);
        await page.waitForTimeout(2000);
        await login.clickOnLoginButton();
        await page.waitForTimeout(2000);
        await addToCart.clickOnHamburgerMenu();
        await page.waitForTimeout(2000);
        await addToCart.clickOnResetAppState();
        await page.waitForTimeout(2000);
        await addToCart.clickToAddToCart1st();
        await page.waitForTimeout(1000);
        await addToCart.clickToAddToCart2nd();
        await page.waitForTimeout(1000);
        await addToCart.clickToAddToCart3rd();
        await page.waitForTimeout(1000);
        await addToCart.clickOnCartIcon();
        await page.waitForTimeout(1000);
        await addToCart.clickOnCheckoutButton();
        await page.waitForTimeout(1000);
        await addToCart.inputfirstName();
        await page.waitForTimeout(1000);
        await addToCart.inputLastName();
        await page.waitForTimeout(1000);
        await addToCart.inputpostalCode();
        await page.waitForTimeout(1000);
        await addToCart.clickOnContinue();
        const names = await addToCart.getProductNamesOnCheckout();
        expect(names.length).toBe(3);
        const prices = await addToCart.getProductPricesOnCheckout();
        expect(prices.length).toBe(3);
        await addToCart.clickOnfinishButton();
        const success = await addToCart.getSuccessMessage();
        expect(success).toBe("Thank you for your order!");
        await addToCart.clickOnHamburgerMenu();
        await addToCart.clickOnResetAppState();
        await page.waitForTimeout(1000);
        await addToCart.clickOnLogout();
        await page.waitForTimeout(1000);

    });
});


