/// <reference types="Cypress" />
describe('Validate dropdown', function () {

    it("validate used static dropdow", function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("select").select("option2").should('have.value', 'option2')
    })

    it("validate used dinamic dropdow", function () {
        cy.get("#autocomplete").type('ind')
        cy.get(".ui-menu-item div[class='ui-menu-item-wrapper']").each(function (item) {
           // const option = 
            if (item.text()==='India') {
                cy.wrap(item).click()
            }
        })
        cy.get("#autocomplete").should('have.value','India')
    })
})