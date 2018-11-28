import React, { Component } from 'react';
import AllPosts from './AllPosts'

class PostsBody  extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://maicers-acebook-api.herokuapp.com/posts')
      .then((res) => {
        return res.json() })
      .then((data) => {
        this.setState({ posts: data })
      })
  }

  render(){
    return (
      <AllPosts posts={this.state.posts} />
    )
  }
}

export default PostsBody
