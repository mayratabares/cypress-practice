/// <reference types="Cypress" />
describe('Validate shopping cart', function () {


    it("validate shopping cart content", function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get(".search-keyword").type('ca')
        cy.wait(2000)
        //go to add the vegetables with name that contain Cashews
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const name = $el.find("h4.product-name").text()
            if (name.includes("Cashews")) {
                $el.find("button").click()
                cy.get("a.cart-icon").click()
                //validate that vegetable appear as item in the cart
                cy.get(".cart-preview.active").should("exist")
                cy.get(".cart-preview.active .cart-items").invoke('text').should("contains", "Cashews")
            }
        })
    })

    it("go to proceed checkout", function () {
        cy.get("button:contains(PROCEED TO CHECKOUT)").click().then(() => {
            cy.wait(2000)
            cy.get(".product-name").first().invoke('text').should("contains", "Cashews")
            cy.get("button").contains("Place Order").click()
        })
    })

    it("place order", function () {

    })
})