import ProductsPage from '../pageObject/ProductsPage'
describe('shoping cellphones', function () {

    before(() => {
        cy.fixture('example').then(function (data) {
            globalThis.data = data
        })
    })

    it('go to buy cellphones', () => {
        const productsPage = new ProductsPage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(2) > .nav-link').click()
        let products = globalThis.data.productNames
        products.forEach(element => {
            cy.selectProduct(element)
        });
        productsPage.getCheckoutButton().click()
        Cypress.config('defaultCommandTimeout', 8000)
        cy.contains('Checkout').click()
        cy.get('#country').type('Ind')
        cy.wait(3000)
        cy.get('.suggestions > :nth-child(1) > li > a').click()
        cy.wait(2000)
        cy.get('#checkbox2').click({ force: true })
        cy.get('input[type=submit]').click()
        cy.get('.alert').invoke('text').should('contain','Success! Thank you! Your order will be delivered in next few weeks :-).')

    })
})