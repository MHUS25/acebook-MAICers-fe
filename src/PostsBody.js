import React, { Component } from 'react';

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
    var posts = this.state.posts.map((post) => {
      return(
        <div key={post.id}>
          <p>{post.message}</p>
        </div>
      )
    })

    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {posts}
        </ul>
    </div>
    )
  }
}

export default PostsBody
