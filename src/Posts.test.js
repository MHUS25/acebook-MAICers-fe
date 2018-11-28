import React from 'react';
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Posts from './Posts'
import fetchPosts from './fetchPosts'

configure({ adapter: new Adapter() });
  window.fetch = fetchPosts()

describe('Posts', () => {
  it('should fetch posts', async () => {
    const component = await mount(<Posts />)
    await component.update()
    expect(component.state('posts').length).toEqual(2);
  });

  it('renders each post', async () => {
    const component = await mount(<Posts />)
    await component.update()

    expect(component.text()).toContain('message 1', "message 2");
  });
});
