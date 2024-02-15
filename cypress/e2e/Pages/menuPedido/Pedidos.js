class Pedidos {
	static clicarMenuPedidos() {
		cy.get('.remixicon-stack-line').click();
	}
	static clicarPainelDisponibilizacao() {
		cy.get('#side-menu > li:nth-child(4) > ul > li:nth-child(1) > a').click();
	}

	static clicarCampoStatus() {
		//Seleciona status
		cy.get(
			'#tickets-table_length > .text-capitalize > .ng-select-container > .ng-value-container > .ng-input > input'
		).click();
		cy.get(
			'[ng-reflect-ng-item-label="Confirmado pela operadora/Conc"]'
		).click();
		// Seleciona grupo economico
		cy.get(
			':nth-child(1) > :nth-child(3) > #dropbox-order-filter > .text-capitalize > .ng-select-container'
		).click();
		cy.contains(
			'span',
			'prelease-associacao educacional pentagono / 49.205.616/0001-98'
		).click();
	}

	static clicarBotaoFiltrar() {
		cy.get('.col-md-4 > .btn').click();
	}
	static selecionaPedidoDaOperadora() {
		cy.get('app-root app-layout div div div recharge-order-list-operator div div div div table tr:nth-child(4) th')
			.click();
		cy.get(':nth-child(9) > .btn').click();
		cy.get(':nth-child(1) > [width="140px"] > :nth-child(1) > a').click();
	}
	static aumentaNumeroDePedidosPorPagina() {
		cy.get('select[name="tickets-table_length"]').select('50');
	}
	static solicitaLogistica() {
		cy.get(
			':nth-child(2) > :nth-child(7) > .row > .col-md-12 > .custom-control > .custom-control-label'
		).click();
		cy.wait(1500);
		cy.contains('button', 'Solicitar Logística').click();
	}

	static preencherFormularioLogística() {
		cy.get(':nth-child(2) > .ng-select > .ng-select-container').click();
		cy.get('[ng-reflect-ng-item-label=" JOÃO RAMALHO"]').click();
		cy.get('.modal-footer > :nth-child(2)'); //Não clicar;
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
	static inclusaoTED(){
		cy.get('#tickets-table_length .ng-select-container input').click();

		cy.get(
			'[ng-reflect-ng-item-label="Confirmado pela operadora/Conc"]'
		).click();
		
		//operadora TED
		cy.get('.col-md-4 > .btn').click();
		cy.wait(6000)
		cy.get('app-root app-layout div div div recharge-order-list-operator div div div div table tr:nth-child(4) th').click();

		cy.get(':nth-child(9) > .btn').click(); //ver itens
		cy.get(':nth-child(1) > [width="140px"] > :nth-child(1) > a').click(); //ver pedido
		cy.wait(10000);
		cy.get('.btn-icon > .mdi').click(); //anexar pedido botão clips
		cy.get('.ng-input > input').click();
		cy.get('[ng-reflect-ng-item-label="TED"]').click();
		cy.get('.modal-footer > .btn-primary').click();
		cy.get('.btn-purple').click(); //Dados do pagamento - inclusao da TED.
	}
}
export default Pedidos;
