export default class LoginObjects
{
    constructor (page)
    {
        this.page = page;
        this.usernameInput = this.page.locator ("//input[@id ='user-name']");
        this.passwordInput = this.page.locator ("//input[@id ='password']");
        this.buttonLogin = this.page.locator ("//input[@name ='login-button']");
        this.lockedoutMessage = this.page.locator ("//h3[@data-test= 'error']");
    }
}