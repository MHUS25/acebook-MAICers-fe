import React, { Component } from 'react';
import axios from 'axios';

class NewPostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {
        message: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({post: {message: event.target.value}});
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post(`https://maicers-acebook-api.herokuapp.com/api/posts`, {post: this.state.post})
      .then(res => {
        this.props.reloadPosts();
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Make a new post:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="New Post" />
      </form>
    );
  }
}

export default NewPostForm
