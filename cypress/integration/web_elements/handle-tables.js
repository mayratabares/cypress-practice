/// <reference types="Cypress" />
describe('Handle tables', function () {

    it("validate used static dropdow", function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("tr td:nth-child(2)").each(($el, index, list) => {
            if ($el.text().includes("Python")) {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).to.equal("25")
                })
            }
        })
    })
})