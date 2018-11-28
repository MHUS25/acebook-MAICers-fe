import AllPosts from '../../src/AllPosts.js'
import React from 'react'
import { mount } from 'cypress-react-unit-test'

describe('AllPosts', function() {
  it('renders a list of posts', function() {
    var data = [
      {message: 'I am post 1', id: '1'},
      {message: 'This is post 2', id: '2'}
    ]

    mount(<AllPosts posts={data} />)

    cy.get('div').contains('I am post 1')
    cy.get('div').contains('This is post 2')
  });
});
