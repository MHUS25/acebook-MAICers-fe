const deferred = require('./deferred')
describe('Signing up', function () {

  beforeEach(function() {
    this.fetchPostsDeferred = deferred()

    cy.visit('/login', {
      onBeforeLoad (win) {
        cy.stub(win, 'fetch')
        .withArgs('https://maicers-acebook-api.herokuapp.com/login')
        .as('getUser')
        .returns(this.fetchPostsDeferred.promise)
      }
    });
  })

  it ('users can fill in form', function() {
    cy.get('#email').type('Clark.Kent@test.com')
    cy.get('#password').type('superman')
    cy.get('button').click()
    cy.get('@getUser').should('be.calledWith', 'https://maicers-acebook-api.herokuapp.com/login')
  });

  it ('receives a confirmation upon succesful log in', function() {

  });


});
