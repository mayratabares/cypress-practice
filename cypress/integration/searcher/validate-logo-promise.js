/// <reference types="Cypress" />
describe('Searcher behavior', function () {


    it("validate logo name", function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get(".brand.greenLogo").then(function (logoElement) {
            cy.log(logoElement.text())
            cy.wrap(logoElement).invoke("text").should("be.eq", "GREENKART")
        })
    })
})