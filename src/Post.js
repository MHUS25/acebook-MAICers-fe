import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props)
    this.delete = this.delete.bind(this);
  }

  delete(event) {
    event.preventDefault();
    axios.delete(`/api/posts/${this.props.post.id}`)
      .then(res => {
        this.props.reloadPosts();
      })
  }

  render() {
    return (
      <div>
      <p>{this.props.post.message}</p>
      <button onClick={this.delete}>Delete</button>
      </div>
    )
  }
}

export default Post
