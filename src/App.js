import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PostsBody from './PostsBody'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path='/posts' component={PostsBody}/>
          </Switch>
      </div>
    );
  }
}

export default App;
