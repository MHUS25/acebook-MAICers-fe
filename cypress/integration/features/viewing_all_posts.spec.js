const deferred = require('./deferred')

describe('Visiting the Posts Page', function() {
  beforeEach(function() {
    this.fetchPostsDeferred = deferred()

    cy.visit('/posts', {
      onBeforeLoad (win) {
        cy.stub(win, 'fetch')
        .withArgs('https://maicers-acebook-api.herokuapp.com/posts')
        .as('fetchPosts')
        .returns(this.fetchPostsDeferred.promise)
      }
    })
  });

  it('request all posts', function() {
    cy.get('@fetchPosts').should('be.calledWith', 'https://maicers-acebook-api.herokuapp.com/posts')
  });

  describe('when posts are returned', function() {

    beforeEach(function() {
      this.fetchPostsDeferred.resolve({
        json () { return [
          {message: 'message 1', id: '1'},
          {message: 'message 2', id: '2'}
        ]},
        ok: true
      })
    });

    it('diplays a list of posts', function() {
      cy.get('ul').contains('message 1')
      cy.get('ul').contains('message 2')
    });
  });
});
