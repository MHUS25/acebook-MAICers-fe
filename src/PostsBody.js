import React, { Component } from 'react';
import AllPosts from './AllPosts'
import NewPostForm from './NewPostForm'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap';

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
    fetch('https://maicers-acebook-api.herokuapp.com/api/posts')
      .then((res) => {
        return res.json() })
      .then((data) => {
        this.setState({ posts: data })
      })
  }

  render(){
    return (
      <div>

       <Navbar color="light" light expand="md">
         <NavbarBrand href="/">Acebook</NavbarBrand>
         <NavbarToggler onClick={this.toggle} />
         <Collapse isOpen={this.state.isOpen} navbar>
           <Nav className="ml-auto" navbar>
             <NavItem>
               <NavLink href="/components/">All posts</NavLink>
             </NavItem>
           </Nav>
         </Collapse>
       </Navbar>

      <h1>Posts</h1>
      <NewPostForm reloadPosts={this.fetchPosts}/>
      <AllPosts posts={this.state.posts} fetchPosts={this.fetchPosts}/>
      </div>
    )
  }
}

export default PostsBody
