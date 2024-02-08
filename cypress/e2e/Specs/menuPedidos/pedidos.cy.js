import pedidos from '../../Pages/menuPedido/Pedidos'
describe('Menu Pedidos', () => {
   beforeEach(() => {
    cy.login();
   })
   it('Painel Disponibilizacao', () => {
       cy.wait(15000);
       cy.visit('https://app-portalautomatizadosec4-prd.azurewebsites.net/recharge-order-list-operator');
       pedidos.clicarCampoStatus();
       pedidos.clicarBotaoFiltrar();
       //pedidos.clicarPainelDisponibilizacao();
       //pedidos.clicarMenuPedidos();
   })
})