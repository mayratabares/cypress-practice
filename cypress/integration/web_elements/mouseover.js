/// <reference types="Cypress" />
describe('Handle tables', function () {

    it("validate mouseover with invoke", function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("div.mouse-hover-content").invoke('show')
        cy.contains("Top").click()
        cy.url().should('contains', 'top')
    })

    it("validate mouseover with trigger", function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //con trigger no funciona :( 
        //cy.get(".mouse-hover").trigger('mouseover', { force: true })
        cy.wait(2000)
        cy.contains("Top").click({ force: true })
        cy.url().should('contains', 'top')
    })
})