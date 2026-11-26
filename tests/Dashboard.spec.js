import {expect,test} from "@playwright/test";
const Dashboard = require('../pages/Dashboard');

const Login = require('../pages/Login');
test("saucedemo Dashboard", async({page})=>{
    const login = new Login(page);
    await login.gotoLoginPage();
    await login.loginToPage("standard_user", "secret_sauce");

    const dashboard = new Dashboard(page);
    await dashboard.addItem();
    const element2 = page.locator('[data-test="shopping-cart-badge"]').getByText("3");
    await expect(element2).toBeVisible();
    await dashboard.removeItem();
    
});