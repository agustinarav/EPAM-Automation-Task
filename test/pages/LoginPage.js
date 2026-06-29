class LoginPage {

// define selectors 

     get usernameInput() {
        return $('#user-name');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }
    
    get errorMessage() {
    return $('.error-message-container');
}



// method to perform login action 

 async login(username, password) {

        await this.usernameInput.setValue(username);

        await this.passwordInput.setValue(password);

        await this.loginButton.click();

 }

}

export default new LoginPage();