import React, { Component } from 'react';

class Posts extends Component {
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
      <ul>
        {posts}
      </ul>
    )
  }
}

export default Posts
