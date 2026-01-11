export default class PurchaseJourneyObjects
{
    constructor (page)
    {
        this.page = page;
        this.usernameInput = this.page.locator ("//input[@placeholder ='Username']");
        this.passwordInput = this.page.locator ("//input[@placeholder ='Password']");
        this.buttonLogin = this.page.locator ("//input[@name ='login-button']");
        this.hamburgerMenu = this.page.locator ("//button[@id='react-burger-menu-btn']");
        this.resetAppState = this.page.locator ("//a[@id='reset_sidebar_link']");
        this.filterIcon = this.page.locator("//select[@class='product_sort_container']");
        this.filterZtoA = this.page.locator("//select[@class='product_sort_container']/option[@value='za']");
        this.selectFirstItem = this.page.locator("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']");
        this.cartIcon = this.page.locator ("//div/a[@class='shopping_cart_link']");
        this.checkoutButton = this.page.locator ("//button[@id='checkout']");
        this.firstNameInput = this.page.locator ("//input[@id='first-name']");
        this.lastNameInput = this.page.locator ("//input[@id='last-name'] ");
        this.postalCodeInput = this.page.locator ("//input[@id='postal-code']");
        this.submitContinue = this.page.locator ("//input[@id='continue']");
        this.finishButton = this.page.locator ("//button[@id='finish']");
        this.logout = this.page.locator ("//a[@id='logout_sidebar_link']");

    }
}