import React, { Component } from 'react';
import './App.css';
import Keypad from './components/Keypad';
import KeypadSet from './components/KeypadSet';

class App extends Component {

  render() {
    return (
      <KeypadSet>
        <Keypad triggerKey="q" color="#8A2BE2" description="Audio File"/>
        <Keypad triggerKey="w" color="#8A2BE2" description="Audio File"/>
        <Keypad triggerKey="e" color="#8A2BE2" description="Audio File"/>
        <Keypad triggerKey="a" color="#8A2BE2" description="Audio File"/>
        <Keypad triggerKey="s" color="#8A2BE2" description="Audio File"/>
        <Keypad triggerKey="d" color="#8A2BE2" description="Audio File"/>
        <Keypad triggerKey="z" color="#8A2BE2" description="Audio File"/>
        <Keypad triggerKey="x" color="#8A2BE2" description="Audio File"/>
        <Keypad triggerKey="c" color="#8A2BE2" description="Audio File"/>
      </KeypadSet>
    );
  }
}

export default App;
