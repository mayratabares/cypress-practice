class HomePage {
    getInputName() {
        return cy.get(".form-group input[name='name']")
    }

    getGender() {
        return cy.get('select')
    }

    getDataBinDing() {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getEntrepreneur() {
        return cy.get('#inlineRadio3')
    }

}
export default HomePage;