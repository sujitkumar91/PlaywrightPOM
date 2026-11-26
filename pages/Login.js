
class Login{
    constructor(page){
        this.page = page;
        this.userName = page.locator("#user-name");
        this.password = page.locator("#password");
        this.loginButton = page.locator("#login-button");
    };

    async gotoLoginPage(){
        await this.page.goto("https://www.saucedemo.com/");
    };

    async loginToPage(userName, password){
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();
    };
};

module.exports = Login;// to export (another method)