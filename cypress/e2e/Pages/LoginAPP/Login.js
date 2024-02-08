class LoginAPP {

    static preencherEmail(){
        cy.get(':nth-child(1) > .form-control').type(Cypress.env('user_email'));
                
    }

    static preencherSenha(){
        cy.get(':nth-child(2) > .form-control').type(Cypress.env('user_password'));
    }

    static clicarBotaoEntrar(){
        cy.get('.btn').should('be.visible').click();
    }

    static validarHomePage(){
        
        cy.get(':nth-child(1) > .card > .card-body > .waves-effect > .card-title').contains('Grupo Econômico')
    }
}  export default LoginAPP;