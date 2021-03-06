import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInput from './components/UserInput'
import {ConnectedUsers} from './components/Users'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        <ConnectedUsers/>
      </div>
    );
  }
}
