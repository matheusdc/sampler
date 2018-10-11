import React, { Component } from 'react';
import './App.css';
import Keypad from './components/Keypad';
import KeypadSet from './components/KeypadSet';

class App extends Component {

  render() {
    return (
      <KeypadSet>
        <Keypad triggerKey="q" description="Audio File"/>
        <Keypad triggerKey="w" description="Audio File"/>
        <Keypad triggerKey="e" description="Audio File"/>
        <Keypad triggerKey="a" description="Audio File"/>
        <Keypad triggerKey="s" description="Audio File"/>
        <Keypad triggerKey="d" description="Audio File"/>
        <Keypad triggerKey="z" description="Audio File"/>
        <Keypad triggerKey="x" description="Audio File"/>
        <Keypad triggerKey="c" description="Audio File"/>
      </KeypadSet>
    );
  }
}

export default App;
