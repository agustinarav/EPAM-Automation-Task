class PdpPage {

    get addToCartButton() {
        return $('#add-to-cart-sauce-labs-backpack');
    }


    get cartButton() {
        return $('.shopping_cart_link');
    }


    get menuButton() {
        return $('#react-burger-menu-btn');
    }


    get resetAppStateButton() {
        return $('#reset_sidebar_link');
    }


    get logoutButton() {
        return $('#logout_sidebar_link');
    }



    async addProductToCart() {

        await this.addToCartButton.click();

    }


    async openCart() {

        await this.cartButton.waitForClickable();

        await this.cartButton.click();

    }


    async openMenu() {

        await this.menuButton.waitForClickable();
        await this.menuButton.click();

    }


    async resetAppState() {

        await this.resetAppStateButton.waitForClickable();

        await this.resetAppStateButton.click();

    }


    async logout() {

        await this.logoutButton.waitForClickable();

        await this.logoutButton.click();

    }

}


export default new PdpPage();