import Post from '../../src/Post.js'
import React from 'react'
import { mount } from 'cypress-react-unit-test'

describe('Post', function() {
  it('renders a post', function() {
    var data = {message: 'I am post 1', id: '1'}

    mount(<Post post={data} />)
    cy.get('p').contains('I am post 1')
  });
});
