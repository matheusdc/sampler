import React, { Component } from 'react';
import './KeypadSet.scss';

export default class KeypadSet extends Component {

  render() {
    return (
      <div className="keypad-set">
        {this.props.children}
      </div>
    );
  }
}