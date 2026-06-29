import LoginPage from "../pages/LoginPage.js";
import PdpPage from "../pages/pdpPage.js";
//import CartPage from "../pages/CartPage.js";
//import CheckoutPage from "../pages/CheckoutPage.js";

//describe=test suite for login functionality
describe("Login tests", () => {

    //it=individual test case --> for successful login
    it("should login successfully with standard user", async () => {


        await browser.url("https://www.saucedemo.com/");


        await LoginPage.login(
            "standard_user",
            "secret_sauce"
        );

        //validate that the user is redirected to the inventory page after successful login
         await expect(browser).toHaveUrl(
            "https://www.saucedemo.com/inventory.html" 
         )

    });

         
   it("should show error when username and password are empty", async () => {

    await browser.url("https://www.saucedemo.com/");

    await LoginPage.login(
        "",
        ""
    );
    await expect(LoginPage.errorMessage)
            .toHaveText("Epic sadface: Username is required");


    });


    it("should show error when password is required", async () => {

    await browser.url("https://www.saucedemo.com/");

    await LoginPage.login(
        "standard_user",
        ""
    );

     await expect(LoginPage.errorMessage)
            .toHaveText("Epic sadface: Password is required");
    });


    it("should show error when postal code is empty", async () => {

    await browser.url("https://www.saucedemo.com/");

    await LoginPage.login(
        "standard_user",
        "secret_sauce"
    );

    await PdpPage.addProductToCart();

    await PdpPage.openCart();

});


// --------UC-2 Handling Latency (Wait Strategies):

it("should login successfully with performance_glitch_user", async () => {

    await browser.url("https://www.saucedemo.com/");

    await LoginPage.login(
        "performance_glitch_user",
        "secret_sauce"
    );

    await expect(browser).toHaveUrl(
        "https://www.saucedemo.com/inventory.html"
    );

    await PdpPage.openMenu();

    await PdpPage.resetAppState();

    await PdpPage.logout();



});





});