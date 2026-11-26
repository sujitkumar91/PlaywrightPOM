 class Ordersummary
{
    constructor(page){
        this.page = page;
        this.finish = page.locator("#finish");
        this.backhome = page.locator("#back-to-products");
        this.openmenu = page.getByRole("button",{name:"Open Menu"});
        this.logout = page.locator("#logout_sidebar_link");
    }
    async ordersummarypage(){

        await this.finish.click();
        await this.backhome.click();
        await this.openmenu.click();
        await this.logout.click();
    };
};
module.exports = Ordersummary;