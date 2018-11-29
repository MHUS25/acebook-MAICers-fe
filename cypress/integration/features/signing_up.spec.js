const deferred = require('./deferred')

describe('Signing up', function () {

  beforeEach(function() {
    this.fetchPostsDeferred = deferred()

    cy.visit('/', {
      onBeforeLoad (win) {
        cy.stub(win, 'fetch')
        .withArgs('https://maicers-acebook-api.herokuapp.com/signup')
        .as('postUser')
        .returns(this.fetchPostsDeferred.promise)
      }
    });
  })

  it ('has a sign up form which can be filled', function() {
    cy.get('#name').type('Clark Kent')
    cy.get('#email').type('Clark.Kent@test.com')
    cy.get('#password').type('superman')
    cy.get('#passwordconfirmation').type('superman')
    cy.get('button').click()
    cy.get('@postUser').should('be.calledWith', 'https://maicers-acebook-api.herokuapp.com/signup')
  });


});
