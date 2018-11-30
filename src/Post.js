import React, { Component } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props)
    this.delete = this.delete.bind(this);
  }

  delete(event) {
    event.preventDefault();
    axios.delete(`https://maicers-acebook-api.herokuapp.com/api/posts/${this.props.post.id}`)
      .then(res => {
        this.props.reloadPosts();
      })
  }

  render() {
    return (
      <div>
      <p>{this.props.post.message}</p>
      <Button onClick={this.delete} outline color="danger">Delete</Button>{' '}
      </div>
    )
  }
}

export default Post
