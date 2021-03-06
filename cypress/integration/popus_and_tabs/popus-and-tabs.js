/// <reference types="Cypress" />
import 'cypress-iframe'

describe('Visible/noVisible elements', function () {

    it("validate used static dropdow", function () {
        cy.visit(Cypress.env('url') + '/AutomationPractice/')
        cy.get("#alertbtn").click()
        cy.get('input[value="Confirm"]').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })

    it("manipulate other tabs", () => {
        cy.visit(Cypress.env('url') + '/AutomationPractice/')
        cy.url().should('include', 'rahulshettyacademy')
        // el removeAttr del target, permite que la pagina no abra en un nuevo tab sino en el mismo
        //si se abre en otro tab no lo puede manipular cypress
        cy.get('#opentab').invoke('removeAttr', 'target').click()
    })

    it("manipulate other windows", () => {
        cy.visit(Cypress.env('url') + '/AutomationPractice/')
        //no se puede combinar método Cypress con método Jquery,por eso hay que crear una promesa
        //cy.get("#openwindow").prop("href")
        cy.get("#opentab").then(function (window) {
            const url = window.prop("href")
            cy.visit(url)
        })
    })

    it.only("manipulate frames", () => {
        cy.visit(Cypress.env('url') + '/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").first().click()
        cy.iframe().find("div[class*='pricing-container']").should('have.length', 2)
        //cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
    })
})