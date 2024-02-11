class Pedidos {
	static clicarMenuPedidos() {
		cy.get('.remixicon-stack-line').click();
	}
	static clicarPainelDisponibilizacao() {
		cy.get('#side-menu > li:nth-child(4) > ul > li:nth-child(1) > a').click();
	}

	static clicarCampoStatus() {
		cy.get(
			'#tickets-table_length > .text-capitalize > .ng-select-container > .ng-value-container > .ng-input > input'
		).click();
		cy.get('[ng-reflect-ng-item-label="Aguardando compra"]').click();
	}

	static clicarBotaoFiltrar() {
		cy.get('.col-md-4 > .btn').click();
	}
	static selecionaPedidoDaOperadora() {
		cy.get(
			'#wrapper > div > div > recharge-order-list-operator > div > div > div > div.card.mt-n2 > div > div > div.row.mb-md-2.col-sm-12 > table > tr:nth-child(1) > th'
		).click();
		cy.get(':nth-child(9) > .btn').click();
		cy.get(':nth-child(1) > [width="140px"] > :nth-child(1) > a').click();
	}
	static aumentaNumeroDePedidosPorPagina() {
		cy.get('select[name="tickets-table_length"]').select('50');
	}
	static solicitaLogistica() {
		cy.get(
			':nth-child(1) > :nth-child(8) > .row > .col-md-12 > .custom-control'
		).click();
		cy.wait(1500);
		cy.contains('button', 'Solicitar Logística').click();
	}

	static preencherFormularioLogística() {
		cy.get(':nth-child(2) > .ng-select > .ng-select-container').click();
		cy.get('[ng-reflect-ng-item-label=" JOÃO RAMALHO"]').click();
		cy.get('.modal-footer > :nth-child(2)').click();
	}

	static selecionaSubmenuInconsistencia() {
		cy.get(':nth-child(3) > .nav-link > .d-none').click();
	}
	static realizaTrativaDeInconsistencia() {
		cy.get(':nth-child(8) > .btn-primary').click();
		cy.get('.ng-select-container').should('be.visible').click();
		cy.get(
			'[ng-reflect-ng-item-label="Cartão solicitado na operadora"]'
		).click();
		cy.get('.col-md-10 > .ng-select > .ng-select-container').click();
		cy.get(
			'[ng-reflect-ng-item-label="Permite compra sem a retirada "]'
		).click();
		cy.get('.col-md-10 > .form-control').click();
		cy.get(':nth-child(3) > [aria-label="8"] > .btn-light').click();
		cy.get('.next > .btn'); // Não colocar .click();
	}
}
export default Pedidos;
