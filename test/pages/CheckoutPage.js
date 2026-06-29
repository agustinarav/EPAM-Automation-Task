class CheckoutPage {


    get firstNameInput() {

        return $('#first-name');

    }


    get lastNameInput() {

        return $('#last-name');

    }


    get postalCodeInput() {

        return $('#postal-code');

    }


    get continueButton() {

        return $('#continue');

    }


    get errorMessage() {

        return $('.error-message-container');

    }


    async continueCheckout() {

        await this.continueButton.click();

    }


}


export default new CheckoutPage();