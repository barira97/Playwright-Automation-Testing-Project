import LoginObjects from "./loginObject";

export default class LoginActions {
    constructor (page) {
        this.page = page;
        this.locators = new LoginObjects (page);
    }
    
    async enterUsername (fullname){
        await this.locators.usernameInput.fill(fullname, {timeout: 10000});
    }
    async enterPassword (password){
        await this.locators.passwordInput.fill(password);
    }
    async clickOnLoginButton (){
        await this.locators.buttonLogin.click();
    }
    async getInvalidMessage(){
       const invalidText = await this.locators.lockedoutMessage.innerText();
       console.log(`inner text: ${invalidText}`);
       return invalidText;
    }
}
