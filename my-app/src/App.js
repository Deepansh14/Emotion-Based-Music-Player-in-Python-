import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <meta charSet="UTF-8" /> 
        <title>MusicPlayer</title>
        <link rel="stylesheet" type="text/css" href="header.css" />
        <link rel="stylesheet" type="text/css" href="background.css" />
        <link rel="stylesheet" type="text/css" href="player.css" />
        <style dangerouslySetInnerHTML={{__html: "\n\tbody{\n\t\tmargin: 0;\n\t}\n\t" }} />
        <br /><br /><br /><br /><br />
        <div id="first">
          <h1 fontFamily="verdana" align="center" style={{fontSize: '40px', color: 'white', margin: 0}}>Emotion Music Player</h1><h1>
          </h1></div>
        {/*<div id="second" class="second">

		<button onclick="myFunction()">
	</div>
	*/}
        <div id="queue"><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Queue<input type="button" id="next" onclick="nextsong()" /><hr /></div>
        <div id="third">
          <div id="emoji" />
          <div id="xyz">
            &nbsp;&nbsp;&nbsp;Playing :&nbsp;&nbsp;
            <label id="sname" align="center">none</label></div>
          <div id="mod">mode :Emotion-mode <input type="radio" name="mode" onclick="setmod(this)" defaultValue={2} /> &nbsp;&nbsp;&gt;</div>
          <audio controls id="main_slider">
            <source id="sel" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>  
       
      </div>
    );
  }
}

export default App;
