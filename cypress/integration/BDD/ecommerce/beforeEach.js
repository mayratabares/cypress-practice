//se ejecuta antes de cada escenario el archivo ecommerce.feature
beforeEach(function () {
    cy.fixture('example').then(function (data) {
        globalThis.data = data
    })
})