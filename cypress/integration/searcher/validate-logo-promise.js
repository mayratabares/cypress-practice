/// <reference types="Cypress" />
describe('validate logo', function () {


    it("validate logo name", function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get(".brand.greenLogo").then(function (logoElement) {
            cy.log(logoElement.text())
            cy.wrap(logoElement).invoke("text").should("be.eq", "GREENKART")
            cy.wrap(logoElement).should("have.text","GREENKART")
        })
    })
})