import LoginObjects from "../login/loginObject";
import AddToCartObjects from "./addToCartObject";

export default class AddToCartActions {
    constructor (page) {
        this.page = page;
        this.locators = new AddToCartObjects (page);
    }
    
    async enterUsername (fullname2){
        await this.locators.usernameInput.fill(fullname2, {timeout: 10000});
    }
    async enterPassword (password){
        await this.locators.passwordInput.fill(password);
    }
    async clickOnLoginButton (){
        await this.locators.buttonLogin.click();
    }
    async clickOnHamburgerMenu (){
        await this.locators.hamburgerMenu.click();
    }
    async clickOnResetAppState (){
        await this.locators.resetAppState.click();
    }
    async clickToAddToCart1st (){
        await this.locators.addToCart1st.click();
    }
    async clickToAddToCart2nd (){
        await this.locators.addToCart2nd.click();
    }
    async clickToAddToCart3rd (){
        await this.locators.addToCart3rd.click();
    }
    async clickOnCartIcon (){
        await this.locators.cartIcon.click();
    }
    async clickOnCheckoutButton (){
        await this.locators.checkoutButton.click();
    }
    async getProductNamesOnCheckout() {
     return await this.page.locator('.inventory_item_name').allTextContents();
    }
    async getProductPricesOnCheckout() {
    return await this.page.locator('.inventory_item_price').allTextContents();
    }
    async inputfirstName (){
        await this.locators.firstNameInput.fill("Barira");
    }
    async inputLastName (){
        await this.locators.lastNameInput.fill("Yasmin");
    }
    async inputpostalCode (){
        await this.locators.postalCodeInput.fill("1216");
    }
    async clickOnContinue (){
        await this.locators.submitContinue.click();
    }
    async clickOnfinishButton (){
        await this.locators.finishButton.click();
    }
    async getSuccessMessage() {
    return await this.locators.successMessage.textContent();
    }
    async clickOnLogout (){
        await this.locators.logout.click();
    }
   
}
