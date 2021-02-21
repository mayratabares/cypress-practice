/// <reference types="Cypress" />
describe('Validate dropdown', function () {

    it("validate used static dropdow", function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("select").select("option2").should('have.value','option2')
    })

    it("validate used dinamic dropdow", function () {
        cy.get("#autocomplete")
    })
})