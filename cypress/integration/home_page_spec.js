describe('Deposits Page', () => {
    it('successfully loads', () => {
        cy.visit('http://localhost:9292/deposits')
        cy.contains('Deposits')
    })
})