describe('Signing up', function () {
  it ('has a sign up form', function() {
    cy.visit('/signup')
    cy.get('#name').type('Clark Kent')
    cy.get('#email').type('Clark.Kent@test.com')
    cy.get('#password').type('superman')
    cy.get('#passwordconfirmation').type('superman')
    cy.get('button').click()
  });
});
