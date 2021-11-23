/* eslint-disable no-undef */
describe('visiting the application, a user ',() => {    
    beforeEach(() => { 
    cy.intercept('GET', 'https://reqres.in/api/users**',{
        fixture: "usersResponse.json"
    } )
        cy.visit("http://localhost:3000")
    })

    it('is expected to see a header', () => {
        cy.get('h1').should('contain.text', 'Employee list')
    });

    it.only('is expected to see 5 list items', () => {
        cy.get('[data-cy=employee-list]').children().should('have.length',5)
    })
        

});
