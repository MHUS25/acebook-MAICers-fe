import React from 'react';
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Posts from './Posts'
import fetchPosts from './fetchPosts'

configure({ adapter: new Adapter() });

describe('Posts', () => {
  it('should fetch posts', async () => {

    window.fetch = fetchPosts()

    const component = await mount(<Posts />)
    await component.update()
    expect(component.state('posts').length).toEqual(2);
  });
});
