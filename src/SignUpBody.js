import React, { Component } from 'react';

class SignUpBody extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <form>
        <input id="name" type="text"/>
        <input id="email" type="email"/>
        <input id="password" type="password"/>
        <input id="passwordconfirmation" type="password"/>
        <button>Sign Up</button>
      </form>
    )
  }
}

export default SignUpBody
