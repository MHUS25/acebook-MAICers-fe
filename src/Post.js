import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <p>{this.props.post.message}</p>
    )
  }
}

export default Post
