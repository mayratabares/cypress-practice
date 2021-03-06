import HomePage from "../pageObject/HomePage";

describe('fill form', function () {

    before(() => {
        cy.fixture('example').then(function (data) {
            globalThis.data = data
        })
    })

    it('go to fill name and gender', () => {
        const homePage = new HomePage()
        cy.visit(Cypress.env('url') + "/angularpractice/")
        homePage.getInputName().type(globalThis.data.name)
        homePage.getGender().select(globalThis.data.gender)
        homePage.getDataBinDing().should('have.value', globalThis.data.name)
        homePage.getInputName().should('have.attr', 'minlength', 2)
        homePage.getEntrepreneur().should('be.disabled')

    })
})