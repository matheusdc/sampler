import React, { Component } from 'react';
import Mousetrap from 'mousetrap';

import './Keypad.scss';

import { LightenDarkenColor } from './Color';

export default class Keypad extends Component {

  state = {
    audioClip: '',
    color: '#8A2BE2',
    pressed: false
  };

  _keyAction = () => {
    console.log(this.state.pressed);
    this.setState({ pressed: !this.state.pressed })
  }

  _generateShades = () => {
    const darken = LightenDarkenColor(this.state.color, -30);
    const lighten = LightenDarkenColor(this.state.color, 30);
    return { darken, lighten };
  }

  componentDidMount() {
    Mousetrap.bind(this.props.triggerKey, () => this._keyAction());
  }

  render() {
    const { pressed } = this.state;
    const { darken, lighten } = this._generateShades();

    const keyPressed = {
      backgroundColor: this.state.color,
      boxShadow: `inset 0 0 100px ${lighten}`
    };

    const keyReleased = {
      backgroundColor: this.state.color,
      boxShadow: `inset 0 0 100px ${darken}`
    };

    return (
      <div className="keypad-container">
        <div className="keypad" style={pressed ? keyPressed : keyReleased} onClick={this.keyAction}>
          <span className="description">{this.props.description}</span>
          <span className="key">{this.props.triggerKey}</span>
        </div>
      </div>
    );
  }
}