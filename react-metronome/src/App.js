import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      playing:false,
      bpm:100,
    };
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange=event=>{
    const bpm= event.target.value;
    this.setState({bpm});
  }
      render() {
      const {playing,bpm}=this.state;
      return (
      <div className="metroname">
      <div className="bpm-slider">
      <div>{bpm} BPM</div>
      <input type="range" min="60" max="240" value={bpm}
      onChange={this.handleChange}
      />
      </div>
      <button>{playing?'stop':'start'}</button>
      </div>
    );
  }
}

export default App;
