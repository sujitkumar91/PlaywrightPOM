import {expect,test} from "@playwright/test";
//import Dashboard from "../pages/Dashboard";
const Login = require('../pages/Login');// to import
const Dashboard = require('../pages/Dashboard');
const Cart = require('../pages/Cart');
const Checkout = require('../pages/Checkout');
const Ordersummary= require('../pages/Ordersummary');

test("saucedemo full automation POM", async({page})=>{
    const login = new Login(page);
    await login.gotoLoginPage();
    await login.loginToPage("standard_user", "secret_sauce");
    const dashboard = new Dashboard(page);
    await dashboard.addItem();
    await dashboard.removeItem();
    const cart = new Cart(page);
    await cart.cartpage();
    const checkout = new Checkout(page)
    await checkout.checkoutpage("sujit","nair","12345","arun","kumar","4321");
    const ordersummary = new Ordersummary(page)
    await ordersummary.ordersummarypage();

    

    
    

});