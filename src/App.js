import React, { Component } from 'react';
import './App.css';
import Keypad from './components/Keypad';
import KeypadSet from './components/KeypadSet';

class App extends Component {

  render() {
    return (
      <KeypadSet>
        <Keypad keybutton="Q" description="Audio File"/>
        <Keypad keybutton="W" description="Audio File"/>
        <Keypad keybutton="E" description="Audio File"/>
        <Keypad keybutton="A" description="Audio File"/>
        <Keypad keybutton="S" description="Audio File"/>
        <Keypad keybutton="D" description="Audio File"/>
        <Keypad keybutton="Z" description="Audio File"/>
        <Keypad keybutton="X" description="Audio File"/>
        <Keypad keybutton="C" description="Audio File"/>
      </KeypadSet>
    );
  }
}

export default App;
