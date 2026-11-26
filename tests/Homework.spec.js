import {expect,test} from "@playwright/test"

let locatorPage2 = "https://www.saucedemo.com/inventory.html";
test.only("Check out", async({page})=>{
    await page.goto(locatorPage2);
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();// login
    // Dashboard
    await page.locator("#add-to-cart-sauce-labs-backpack").click();
    await page.locator("#add-to-cart-sauce-labs-bike-light").click();
    await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    await page.locator("#add-to-cart-sauce-labs-fleece-jacket").click();

    //Cart
    const element = page.locator('[data-test="shopping-cart-badge"]').getByText("4");
    await expect(element).toBeVisible();
    await page.locator("#remove-sauce-labs-bike-light").click();
    
    const element2 = page.locator('[data-test="shopping-cart-badge"]').getByText("3");
    await expect(element2).toBeVisible();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('#remove-sauce-labs-bolt-t-shirt').click()

    // checkout
    await page.getByRole("button", {name: "Checkout"}).click();
    await page.locator("#cancel").click();
    await page.getByRole("button", {name: "Checkout"}).click();
    

    await page.getByPlaceholder("First Name").fill("test");
    await page.getByPlaceholder("Last Name").fill("last");
    await page.getByPlaceholder("Zip/Postal Code").fill("123456");
  
    await page.locator("#cancel").click();
    //complete flow

    await page.locator('[data-test="shopping-cart-link"]').click();
     await page.getByRole("button", {name: "Checkout"}).click();
    await page.getByPlaceholder("First Name").fill("test");
    await page.getByPlaceholder("Last Name").fill("last");
    await page.getByPlaceholder("Zip/Postal Code").fill("123456");
    await page.getByRole("button", {name: "Continue" }).click();
    await page.getByRole("button", {name: "Finish" }).click();
    const element3 = page.getByText("Thank you for your order!");
    await expect(element3).toBeVisible();
    await page.getByRole("button", {name: "Back Home" }).click();

    //logout
    await page.locator("#react-burger-menu-btn").click();
    await page.locator("#logout_sidebar_link").click();
    
    const element4 = page.locator("#login-button");
     await expect(element4).toBeVisible();
})