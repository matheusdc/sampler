import React, { Component } from 'react';
import './Keypad.scss';

export default class Keypad extends Component {

  _handleKeyPress = (event) => {
    console.log('keypress', event.key)
    if(event.key === this.props.key){
      console.log(`${this.props.key} press here!`)
    }
  }

  render() {
    return (
      <div className="keypad-container">
        <div className="keypad" onKeyPress={this._handleKeyPress} tabIndex="0">
          <span className="description">{this.props.description}</span>
          <span className="key">{this.props.keybutton}</span>
        </div>
      </div>
    );
  }
}