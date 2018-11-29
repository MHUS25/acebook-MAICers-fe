import React, { Component } from 'react';
import AllPosts from './AllPosts'
import NewPostForm from './NewPostForm'

class PostsBody  extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts() {
    fetch('/api/posts')
      .then((res) => {
        return res.json() })
      .then((data) => {
        this.setState({ posts: data })
      })
  }

  render(){
    return (
      <div>
      <h1>Posts</h1>
      <NewPostForm reloadPosts={this.fetchPosts}/>
      <AllPosts posts={this.state.posts} />
      </div>
    )
  }
}

export default PostsBody
