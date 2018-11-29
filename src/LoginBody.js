import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'


class LoginBody extends Component {
  constructor(props) {
    super(props)
  }

  handleLoginSumbit(email, password) {
    let body = JSON.stringify({user: {email: email, password: password}})
// https://maicers-acebook-api.herokuapp.com/login
    fetch('https://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((res) => {console.log(res)})
  }

  render() {
    let formFields = {}

    return (
      <form>
        <input placeholder="Enter email" id="email" ref={input => formFields.email = input} type="email"/><br/>
        <input placeholder="Enter password" id="password" ref={input => formFields.password = input} type="password"/><br/>
        <button onClick={ (e) => {
          e.preventDefault()
          this.handleLoginSumbit(formFields.email.value, formFields.password.value)
        }}>Log in</button>
      </form>
    )
  }

}

export default LoginBody
