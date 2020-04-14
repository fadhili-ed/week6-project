describe('Deposits Page', () => {
    it('successfully loads', () => {
        cy.visit('http://localhost:9292/deposits')
        cy.contains('Deposits')
<<<<<<< HEAD
        cy.get('#deposits_form').should('contain', 'submit')
=======
>>>>>>> b102893... updates on cypress simple test to check if the deposits page has the word Deposits
    })
})