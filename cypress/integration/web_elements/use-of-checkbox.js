/// <reference types="Cypress" />
describe('Validate checkbox and radiobuttons', function () {

    it("validate used checkox", function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value', 'option1')
        cy.get("#checkBoxOption1").uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").check(['option2', 'option3'])
    })

    it("validate used radiobutton", function () {
        //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("[value='radio3']").check().should('be.checked')
        cy.get("[type='radio']:checked").should('have.length', 1)
    })
})