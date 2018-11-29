import React, { Component } from 'react';

class SignUpBody extends Component {
  constructor(props) {
    super(props)
  }

  handleFormSumbit(name, email, password) {
    console.log(name, email, password)
    let body = JSON.stringify({user: {name: name, email: email, password: password}})
    fetch('https://maicers-acebook-api.herokuapp.com/signup' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    })
  }

  render() {
    let formFields = {}
    return(
      <form>
        <input id="name" ref={input => formFields.name = input} type="text"/>
        <input id="email" ref={input => formFields.email = input} type="email"/>
        <input id="password" ref={input => formFields.password = input} type="password"/>
        <input id="passwordconfirmation" type="password"/>
        <button onClick={ (e) => {
          this.handleFormSumbit(formFields.name.value, formFields.email.value, formFields.password.value)
        }}>Sign Up</button>
      </form>
    )
  }
}

export default SignUpBody
