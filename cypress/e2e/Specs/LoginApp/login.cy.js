import LoginAPP from '../../Pages/LoginAPP/Login';

describe.only('Acessar o Portal APP', () => {
	beforeEach(() => {
		cy.visit('https://app-portalautomatizadosec4-prd.azurewebsites.net');
	});
	it('Realizar o Login com sucesso', () => {
		LoginAPP.preencherEmail();
		LoginAPP.preencherSenha();
		LoginAPP.clicarBotaoEntrar();
		LoginAPP.validarHomePage();
	});
});
