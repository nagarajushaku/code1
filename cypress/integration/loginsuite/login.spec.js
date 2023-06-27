import { loginpage } from "../pages/login.page";

describe('To verify the login functionality', () => {
    let loginuserdata;
    before(() => {
        cy.fixture('login.json').then((userdata) => ((loginuserdata) = (userdata)))
    })
    it('To verify positive logIn test', () => {
        cy.visit(Cypress.env('baseUrl'));
        loginpage.enterUsername(loginuserdata.positivelogintest);
        loginpage.enterPassword(loginuserdata.positivelogintest);
        loginpage.clicksOnSubmit();
        loginpage.verifyTheNewPageURl();
        loginpage.verifyTheNewPageContainsExpectedText();
    });
    it('To verify negative username test', () => {
        cy.visit(Cypress.env('baseUrl'));
        loginpage.enterUsername(loginuserdata.negativeusernametest);
        loginpage.enterPassword(loginuserdata.negativeusernametest);
        loginpage.clicksOnSubmit();
        loginpage.verifyErrormsg();
    });
    it('To verify negative password  test', () => {
        loginpage.enterUsername(loginuserdata.negativepasswordtest);
        loginpage.enterPassword(loginuserdata.negativepasswordtest);
        loginpage.clicksOnSubmit();
        loginpage.verifyErrormsg();
    });
    it('To verify empty username and empty password  test', () => {
        loginpage.enterUsername(loginuserdata.emptyusernameandemptypassword);
        loginpage.enterPassword(loginuserdata.emptyusernameandemptypassword);
        loginpage.clicksOnSubmit();
        loginpage.verifyErrormsg();
    });
    it('To verify that the User is not able to Login with an invalid Username and invalid Password', () => {
        loginpage.enterUsername(loginuserdata.invalidusernameandinvalidpassword);
        loginpage.enterPassword(loginuserdata.invalidusernameandinvalidpassword);
        loginpage.clicksOnSubmit();
        loginpage.verifyErrormsg();
    });
    it('To verify the login page for both, when the field is blank and Submit button is clicked', () => {
        loginpage.clicksOnSubmit();
        loginpage.verifyErrormsg();
    });
    it('To verify that the logout link is redirected to login/home page', () => {
        cy.visit(Cypress.env('baseUrl'));
        loginpage.enterUsername(loginuserdata.positivelogintest);
        loginpage.enterPassword(loginuserdata.positivelogintest);
        loginpage.clicksOnSubmit();
        loginpage.verifyTheNewPageURl();
        loginpage.verifyTheNewPageContainsExpectedText();
        loginpage.clicksOnLogOutButton();
    });

})