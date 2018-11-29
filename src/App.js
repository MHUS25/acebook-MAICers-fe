import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PostsBody from './PostsBody'
import SignUpBody from './SignUpBody'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path='/posts' component={PostsBody}/>
            <Route exact path='/signup' component={SignUpBody}/>
          </Switch>
      </div>
    );
  }
}

export default App;
