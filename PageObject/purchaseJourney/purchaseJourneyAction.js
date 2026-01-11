import LoginObjects from "../login/loginObject.js";
import AddToCartObjects from "../addToCart/addToCartObject.js";
import PurchaseJourneyObjects from "./purchaseJourneyObject.js";

export default class PurchaseJourneyActions {
    constructor (page) {
        this.page = page;
        this.locators = new PurchaseJourneyObjects (page);
    }
    
    async enterUsername (fullname3){
        await this.locators.usernameInput.fill(fullname3);
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
    async clickOnFilterIcon (){
        await this.locators.filterIcon.click();
    }
    async selectFilterZtoA (){
        //await this.locators.filterZtoA.click();
        await this.locators.filterIcon.selectOption('za');
    }
    async clickOnFirstItem (){
        await this.locators.selectFirstItem.click();
    }
    async clickOnCartIcon (){
        await this.locators.cartIcon.click();
    }
    async clickOnCheckoutButton (){
        await this.locators.checkoutButton.click();
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
    async clickOnLogout (){
        await this.locators.logout.click();
    }
   
}
