import React, { Component } from 'react';
import './App.css';
import click1 from './click1.wav';
import click2 from './click2.wav';

class App extends Component {

  constructor(props){
    super(props);
    this.click1=new Audio(click1);
    this.click2=new Audio(click2);
    this.state={
      playing:false,
      bpm:100,
    };
    this.handleChange=this.handleChange.bind(this);
    this.startStop=this.startStop.bind(this);
    this.playClick=this.playClick.bind(this);
  }

  handleChange=event=>{
    const bpm = event.target.value;
    this.setState({bpm});
  }

  startStop=()=>{
    if(this.state.playing){
      clearInterval(this.timer);
      this.setState({
        playing:false,
      });
    }
    else{
      this.timer=setInterval(this.playClick,(60 / this.state.bpm) * 1000);
      this.setState({
        playing:true,
        count:0,
      },
      this.playClick,
      );
    }
  }

  playClick = () => {
    const { count, beatsPerMeasure } = this.state;
  
    // The first beat will have a different sound than the others
    if (count % beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play();
    }
  
    // Keep track of which beat we're on
    this.setState(state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  };
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
      <button onClick={this.startStop}>{playing?'stop':'start'}</button>
      </div>
    );
  }
}

export default App;
