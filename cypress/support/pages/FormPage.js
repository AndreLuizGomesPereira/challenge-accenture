/// <reference types="Cypress" />

import FormElements from "../elements/FormElements";
const formElements = new FormElements();
const url = Cypress.config("baseUrl");
const picture = "profile.jpg";

class FormPage {
  // Acessa o site que será testado
  acessarSite() {
    cy.visit(url);
  }

  preencherFormulario() {
    cy.get(formElements.selectMake()).select("BMW");
    cy.get(formElements.selectModel()).select("Motorcycle");
    cy.get(formElements.fillCylinder()).type(1200);
    cy.get(formElements.fillEngine()).type(320);
    cy.get(formElements.fillDate()).type("05/25/2022");
    cy.get(formElements.selectSeats()).select("2");
    cy.get(formElements.choiceHand()).check({ force: true });
    cy.get(formElements.selectSeatsMotorcycle()).select("2");
    cy.get(formElements.selectFuel()).select("Gas");
    cy.get(formElements.fillPayload()).type(80);
    cy.get(formElements.fillWeigth()).type(240);
    cy.get(formElements.fillPrice()).type(12000);
    cy.get(formElements.fillLicense()).type("123abc");
    cy.get(formElements.fillAnnual()).type(100);
    cy.get(formElements.buttonToInsurant()).click();

    cy.get(formElements.fillFirstName()).type("Jose");
    cy.get(formElements.fillLastName()).type("Santos");
    cy.get(formElements.fillBirthday()).type("12/31/1969");
    cy.get(formElements.selectGender()).check({ force: true });
    cy.get(formElements.fillAdress()).type("Rua dos Bobos");
    cy.get(formElements.selectCountry()).select("Brazil");
    cy.get(formElements.fillZipCode()).type("45995000");
    cy.get(formElements.fillCity()).type("Teixeira");
    cy.get(formElements.selectOcupation()).select("Employee");
    cy.get(formElements.selectHobbies()).check({ force: true });
    cy.get(formElements.fillWebSite()).type("https://www.google.com");
    cy.get(formElements.uploadPicture()).attachFile(picture);
    cy.get(formElements.buttonToProduct()).click();

    cy.get(formElements.fillStartDate()).type("12/25/2022");
    cy.get(formElements.selectInsurance()).select("7000000");
    cy.get(formElements.selectMerit()).select("Super Bonus");
    cy.get(formElements.selectDamage()).select("Partial Coverage");
    cy.get(formElements.selectOptional()).click({ force: true });
    cy.get(formElements.selectCourtesy()).select("Yes");
    cy.get(formElements.buttonToPrice()).click();

    cy.get(formElements.selectPrice()).click({ force: true });
    cy.get(formElements.buttonToQuote()).click();

    cy.get(formElements.fillEmail()).type("jose@gmail.com");
    cy.get(formElements.fillPhoneNumber()).type("99999999999");
    cy.get(formElements.fillUserName()).type("jose.santos");
    cy.get(formElements.fillPassword()).type("Teste123");
    cy.get(formElements.fillConfirmPassword()).type("Teste123");
    cy.get(formElements.buttonSendEmail()).click().wait(5000);
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  }

  visualizarBotaoRecuperarSenha() {
    cy.get(formElements.modalMessage()).should(
      "have.text",
      "Sending e-mail success!"
    );
    cy.get(".confirm").click();
  }
}

export default FormPage;
