import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ProductsPage from '../../../support/pageObject/ProductsPage'
import HomePage from '../../../support/pageObject/HomePage';
const productsPage = new ProductsPage()
const homePage = new HomePage()
let name;

Given('I open Ecommerce page', () => {
    cy.visit(Cypress.env('url') + '/angularpractice/')
})

When('I add items to card', function () {
    cy.get(':nth-child(2) > .nav-link').click()
    let products = globalThis.data.productNames
    products.forEach(element => {
        cy.selectProduct(element)
    });
})

And('Validate the total prices', () => {
    productsPage.getCheckoutButton().click().then(() => {
        //validate total is correct
        var price = 0;
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            price += parseInt($el.text().split(".")[1].trim())
            console.log(price)
        }).then(() => {
            cy.get('.text-right strong').invoke('text').should("contain", price)
        })
    })
})

Then('Select the country and verify thankyou message', () => {
    cy.contains('Checkout').click()
    cy.get('#country').type('Ind')
    cy.wait(3000)
    cy.get('.suggestions > :nth-child(1) > li > a').click()
    cy.wait(2000)
    cy.get('#checkbox2').click({ force: true })
    cy.get('input[type=submit]').click()
    cy.get('.alert').invoke('text').should('contain', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
})

When('I fill the form detail', function (dataTable) {
    /*
    homePage.getInputName().type(globalThis.data.name)
    homePage.getGender().select(globalThis.data.gender)*/
    //con los datos definidos en .feature
    name = dataTable.rawTable[1][0];
    homePage.getInputName().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('Validate the form behaviour', function () {
    //homePage.getDataBinDing().should('have.value', globalThis.data.name)
    homePage.getDataBinDing().should('have.value', name)
    homePage.getInputName().should('have.attr', 'minlength', 2)
    homePage.getEntrepreneur().should('be.disabled')
})