import React, { Component } from 'react';
import KeyHandler, { KEYDOWN, KEYUP } from 'react-key-handler';

import './Keypad.scss';

import { LightenDarkenColor } from './Color';

export default class Keypad extends Component {

  constructor(props) {
    super(props);
    this.state = {
      audioClip: '',
      color: this.props.color,
      pressed: false
    };
  }

  _keyDownAction = () => {
    if(!this.state.pressed) {
      this.setState({ pressed: true })
    }
  }

  _keyUpAction = () => {
    this.setState({ pressed: false })
  }

  _generateShades = () => {
    const darken = LightenDarkenColor(this.state.color, -70);
    const lighten = LightenDarkenColor(this.state.color, 70);
    return { darken, lighten };
  }

  render() {
    const { pressed } = this.state;
    const { darken, lighten } = this._generateShades();

    const keyPressed = {
      backgroundColor: lighten,
      boxShadow: `inset 0 0 50px ${darken}`
    };

    const keyReleased = {
      backgroundColor: this.state.color,
      boxShadow: `inset 0 0 100px ${darken}`
    };

    return (
      <div className="keypad-container">
        <KeyHandler
          keyEventName={KEYDOWN}
          keyValue={this.props.triggerKey}
          onKeyHandle={this._keyDownAction}
        />
        <KeyHandler
          keyEventName={KEYUP}
          keyValue={this.props.triggerKey}
          onKeyHandle={this._keyUpAction}
        />

        <div className="keypad" style={pressed ? keyPressed : keyReleased} >
          <span className="description">{this.props.description}</span>
          <span className="key">{this.props.triggerKey}</span>
        </div>
      </div>
    );
  }
}