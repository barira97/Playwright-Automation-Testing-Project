import {expect, test} from "@playwright/test";
import LoginActions from "../PageObject/login/loginAction.js";
import AddToCartActions from "../PageObject/addToCart/addToCartAction.js";
import PurchaseJourneyActions from "../PageObject/purchaseJourney/purchaseJourneyAction.js";
const fullname3 = "performance_glitch_user";
const password = "secret_sauce";
test.describe ("Swag Labs site Purchase item test journey by filtering", () => {
    let login, addToCart, purchaseJourney;
    test.beforeEach (async ({page})=> {
        login = new LoginActions (page);
        addToCart = new AddToCartActions (page);
        purchaseJourney = new PurchaseJourneyActions (page);
        await page.goto ("https://www.saucedemo.com/");
    });

    test ("Successfully filtered, add the product and Checkout", async({page}) =>{

        await purchaseJourney.enterUsername (fullname3);
        await page.waitForTimeout(2000);
        await login.enterPassword (password);
        await page.waitForTimeout(2000);
        await login.clickOnLoginButton();
        await page.waitForTimeout(2000);
        await addToCart.clickOnHamburgerMenu();
        await page.waitForTimeout(2000);
        await addToCart.clickOnResetAppState();
        await page.waitForLoadState('networkidle');
        await page.keyboard.press('Escape');  // ensure sidebar closes
        await page.waitForSelector(".inventory_list", { state: "visible" });
        await page.waitForSelector(".product_sort_container", { state: "visible" });
        await purchaseJourney.clickOnFilterIcon();
        await purchaseJourney.selectFilterZtoA();
        await purchaseJourney.clickOnFirstItem();
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
        await addToCart.clickOnfinishButton();
        await addToCart.clickOnHamburgerMenu();
        await addToCart.clickOnResetAppState();
        await page.waitForTimeout(1000);
        await addToCart.clickOnLogout();

    });
});


