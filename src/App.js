import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import textScript from './js/text_script.js';
import testWords from './json/test_words.json';

class App extends Component {

  componentDidMount() {
    //tyler -- a couple of options here!  You could separate the script out into its own file and then give it the json to do things with:
    let test_script = textScript(testWords);
    test_script.logJSONToConsole();

    this.inComponentConsoleLog();
  }

  //or you could not use a separate script and instead include your methods inside a component
  inComponentConsoleLog () {
    console.log('from inside component: ', testWords);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
