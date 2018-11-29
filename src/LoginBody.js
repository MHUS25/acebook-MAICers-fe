import React, { Component } from 'react';


class LoginBody extends Component {
  constructor(props) {
    super(props)
  }

  handleLoginSumbit(email, password) {
    let body = JSON.stringify({user: {email: email, password: password}})

    fetch('https://maicers-acebook-api.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    })
  }

  render() {
    let formFields = {}

    return (
      <form>
        <input placeholder="Enter email" id="email" ref={input => formFields.email = input} type="email"/><br/>
        <input placeholder="Enter password" id="password" ref={input => formFields.password = input} type="password"/><br/>
        <button onClick={ (e) => {
          this.handleLoginSumbit(formFields.email.value, formFields.password.value)
        }}>Sign Up</button>
      </form>
    )
  }

}

export default LoginBody
