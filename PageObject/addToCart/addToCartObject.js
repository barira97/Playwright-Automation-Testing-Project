export default class AddToCartObjects
{
    constructor (page)
    {
        this.page = page;
        this.usernameInput = this.page.locator ("//input[@placeholder ='Username']");
        this.passwordInput = this.page.locator ("//input[@placeholder ='Password']");
        this.buttonLogin = this.page.locator ("//input[@name ='login-button']");
        this.hamburgerMenu = this.page.locator ("//button[@id='react-burger-menu-btn']");
        this.resetAppState = this.page.locator ("//a[@id='reset_sidebar_link']");
        this.addToCart1st = this.page.locator ("//button[@id='add-to-cart-sauce-labs-backpack']");
        this.addToCart2nd = this.page.locator ("//button[@id='add-to-cart-sauce-labs-bike-light']");
        this.addToCart3rd = this.page.locator ("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']");
        this.cartIcon = this.page.locator ("//div/a[@class='shopping_cart_link']");
        this.checkoutButton = this.page.locator ("//button[@id='checkout']");
        this.firstNameInput = this.page.locator ("//input[@id='first-name']");
        this.lastNameInput = this.page.locator ("//input[@id='last-name'] ");
        this.postalCodeInput = this.page.locator ("//input[@id='postal-code']");
        this.submitContinue = this.page.locator ("//input[@id='continue']");
        this.finishButton = this.page.locator ("//button[@id='finish']");
        
        this.productNames = page.locator("//div[@class='inventory_item_name']");
        this.productPrices = page.locator("//div[@class='inventory_item_price']");
        this.successMessage = page.locator("//h2[@data-test = 'complete-header']");
        this.logout = this.page.locator ("//a[@id='logout_sidebar_link']");


    }
}