class Dashboard{
    constructor(page){
        this.page = page;
        this.addItem1 = page.locator("#add-to-cart-sauce-labs-backpack");
        this.addItem2 = page.locator("#add-to-cart-sauce-labs-bike-light");
        this.addItem3 = page.locator("#add-to-cart-sauce-labs-bolt-t-shirt");
        this.removeItem1 = page.locator('#remove-sauce-labs-bolt-t-shirt');

    }
    async addItem(){
        await this.addItem1.click();
        await this.addItem2.click();
        await this.addItem3.click();

    };

    async removeItem(){
        await this.removeItem1.click();
    }

};

module.exports = Dashboard;