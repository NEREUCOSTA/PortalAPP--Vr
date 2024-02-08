class Pedidos {

    static clicarMenuPedidos(){
       
        cy.get('.remixicon-stack-line').click()

    }
    static clicarPainelDisponibilizacao(){
        cy.get('#side-menu > li:nth-child(4) > ul > li:nth-child(1) > a').click()
    }

    static clicarCampoStatus(){
        cy.get('#tickets-table_length > .text-capitalize > .ng-select-container > .ng-value-container > .ng-input > input').click();
        cy.get('[ng-reflect-ng-item-label="Aguardando compra"]').click();
    }

    static clicarBotaoFiltrar(){
        cy.get('.col-md-4 > .btn').click();
    }

} export default Pedidos 