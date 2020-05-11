import React, { Component } from 'react';
import './App.css';
import {isArrayEmpty} from './utils';
import logo from './amazon.png';
import heartbeat from './heartbeat.png'
import {ColorCard} from './ColorCard';
import Clock from 'react-live-clock';
class App extends Component{
  state={ 
    title: 'FitBit 19 - The Smartest Watch',
    description: 'Anbes Smart Watch for Android Phones and Compatible with iPhone Samsung, IP68 Waterproof Health Tracker Smartwatch with Heart Rate Monitor Calorie Counter Sleep Monitor for Women Men',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    selectStyle: 'https://imgur.com/Mplj1YR.png',
    featureList: [
        "Time", "Heart Rate"
    ], 
    feature : true
  }
  getTime = () => {
      this.setState({feature : true})
  }
  getHeartRate = ()=>{
    this.setState({feature : false})
  }
  getSRC = (pos) =>{
      const currentState = this.state.colorOptions[pos].imageUrl;
      this.setState({selectStyle : currentState});
  }
  render(){
    const newarr = isArrayEmpty(this.state.colorOptions) ? [] : this.state.colorOptions.map((item,pos)=>{
      return <ColorCard key={item.styleName} imageUrl={item.imageUrl} getSRC = {()=> {this.getSRC(pos)}}/>
    })
    return(
    <div className="App">
      <header>
        <nav className = "navbar">
          <div className = "sst">
            <img className = "iconn" src = {logo} alt = "hehe"/>
          </div>
        </nav>
        <div className = "middle">
          <div className = "leftflex">
            <img className = "image" src = {this.state.selectStyle} alt = "image3"/>
            {
              this.state.feature ? <Clock className="timeShow" format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /> :  <p className = "heartRate">75bpm</p>
            }{
            this.state.feature ? null : <img className = "heartdi" src = {heartbeat} alt = "hehe"/>
              }
            </div>
          <div className = "rightflex">
              <h1 className = "h1">{this.state.title}</h1>
              <p>{this.state.description}</p>
              <h3 className = "h1">Select Color</h3>
              {
                newarr
              }
              <h3 className = "h1">Features</h3>
              <button className = "timebutton" onClick = {this.getTime}>Time</button>
              <button className = "heartbutton" onClick = {this.getHeartRate}>Heart Rate</button><br></br>
              <button className = "buyNowButton">Buy Now</button>
          </div>
        </div>
      </header>
    </div>)
  }
}

export default App;
