/// <reference types="Cypress" />
describe('Searcher behavior', function () {


    it("validate result to search by 'ca'", function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get(".search-keyword").type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        // with find() I can get elements inside other 
        cy.get('.products').find('.product').should('have.length', 4)
        //now go to add one product to the shopping car 
        cy.get('.products').find('.product').eq(2).contains("ADD TO CART").click()
        //go to add the vegetables with name that contain Cashews
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const name = $el.find("h4.product-name").text()
            if (name.includes("Cashews")) {
                $el.find("button").click()
            }
        })
    })
})