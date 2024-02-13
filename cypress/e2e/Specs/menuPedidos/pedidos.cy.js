import pedidos from '../../Pages/menuPedido/Pedidos';
describe('Menu Pedidos', () => {
	beforeEach(() => {
		cy.login();
	});
	it('Solicitar Logistica', () => {
		cy.wait(5000);
		cy.visit(
			'https://app-portalautomatizadosec4-prd.azurewebsites.net/recharge-order-list-operator'
		);
		cy.viewport(1920, 1080);
		pedidos.clicarCampoStatus();
		pedidos.clicarBotaoFiltrar();
		pedidos.selecionaPedidoDaOperadora();
		pedidos.aumentaNumeroDePedidosPorPagina();
		pedidos.solicitaLogistica();
		pedidos.preencherFormularioLogística();
	});
	it('Tratativa de inconsistência', () => {
		cy.wait(5000);
		cy.visit(
			'https://app-portalautomatizadosec4-prd.azurewebsites.net/recharge-order-list-operator'
		);
		cy.viewport(1920, 1080);
		pedidos.clicarCampoStatus();
		pedidos.clicarBotaoFiltrar();
		pedidos.selecionaPedidoDaOperadora();
		pedidos.selecionaSubmenuInconsistencia();
		pedidos.realizaTrativaDeInconsistencia();
	});

	it.only('Inclusão de TED', () => {
		cy.wait(5000);
		cy.visit(
			'https://app-portalautomatizadosec4-prd.azurewebsites.net/recharge-order-list-operator'
		);
		cy.viewport(1920, 1080);	
		pedidos.clicarBotaoFiltrar();
		pedidos.inclusaoTED();
	});
});
