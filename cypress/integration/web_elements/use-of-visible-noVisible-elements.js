/// <reference types="Cypress" />
describe('Visible/noVisible elements', function () {

    it("validate used static dropdow", function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("#alertbtn").click
        cy.get('#hide-textbox').click()
        cy.get("#displayed-text").should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get("#displayed-text").should('be.visible')
    })
})