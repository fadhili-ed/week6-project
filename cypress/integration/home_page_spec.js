describe('Deposits Page', () => {
    it('successfully loads', () => {
        cy.visit('http://localhost:9292/deposits')
        cy.contains('Deposits')
        // check if there is a form
        cy.get('form')
        // check if the form has the desired class
        cy.get('form').should('have.class', 'deposits_form')
        // typing into a text box
        cy.get('input:first')
          .type('Jon')
        cy.get('input:last')  
          .type('70000')
    })
})