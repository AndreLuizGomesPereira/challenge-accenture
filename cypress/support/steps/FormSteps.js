///<reference types="cypress" />

import FormPage from "../pages/FormPage";
const formPage = new FormPage();

Given(/^acesso o site Tricentis$/, () => {
  formPage.acessarSite();
});

When(/^preencher o formulario com os dados corretamente$/, () => {
  formPage.preencherFormulario();
});

Then(/^devo visualizar a mensagem "([^"]*)"$/, (args1) => {
  formPage.visualizarBotaoRecuperarSenha();
});
