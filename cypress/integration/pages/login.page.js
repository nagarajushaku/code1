class Login {
enterUsername(logindata){
    cy.get('[name="username"]').type(logindata.username)
}
enterPassword(logindata){
    cy.get('#password').type(logindata.password)
}
clicksOnSubmit(){
    cy.get('#submit').should('be.visible').click();

}
verifyTheNewPageURl(){
    cy.url().should('include','/logged-in-successfully/')
}
verifyTheNewPageContainsExpectedText(){
    cy.get('.post-title').should('have.text','Logged In Successfully');
}
clicksOnLogOutButton(){
    cy.get('.wp-block-button__link').click();
}
verifyErrormsg(){
    cy.get('#error').should('be.visible');
    cy.get('#error').invoke('text').then(data=>{
        expect(data).to.be.equals(data)
    })
}
}
export const loginpage = new Login();