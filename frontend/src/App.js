import React from 'react';
import './App.css';
import { ReactComponent as A } from './1.svg';
import { ReactComponent as B } from './2.svg';
import { ReactComponent as C } from './3.svg';
import { ReactComponent as D } from './4.svg';
import { ReactComponent as E } from './5.svg';
import { ReactComponent as F } from './6.svg';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.intervalID = '';
    this.state = {
      color: "#8bbf41",
      section: [{}]*6,
      fire: "Low",
    };
  }

  // async componentDidMount() {
  //   const url = "https://damp-journey-05387.herokuapp.com/get-data";
  //   const response = await fetch(url);
  //   const data  = await response.json();
  //   this.setState({section: data});
  // }

  handleFireDangerLevel() {
    let humidity = this.state.section[this.props.id].humidity;
    let temperature = this.state.section[this.props.id].temperature;

    if (humidity >= 80 && temperature >=35) {
      this.setState({color:'#b53737',fire:'High'});
    } else if (humidity >= 75 && temperature >= 33) {
      this.setState({color:'#ffd300',fire:'Medium'});
    } else {
      this.setState({color:'#8bbf41',fire:'Low'});
    };
  }

  render() {
    return (
      <div className='Info'>
          <div>
            <p className={"Appinfo"}>Area Name: {this.props.section[this.props.id].location}</p>
            <p className={"Appinfo"}>Humidity: {this.props.section[this.props.id].humidity}%</p>
            <p className={"Appinfo"}>Temperature: {this.props.section[this.props.id].temperature}&deg;C</p>
            <p className={"Appinfo"}>Likeliness of fire: {this.state.fire}</p>
          </div>
      </div>
    );
   }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleColour = this.handleColour.bind(this);
    this.state = {id: 2, section: []}
  }

  async componentDidMount() {
    const url = "https://damp-journey-05387.herokuapp.com/get-data";
    const response = await fetch(url);
    const data  = await response.json();
    this.setState({section: data});
  }

  handleColour(id) {
    console.log(this.state.section[id].humidity)
    let humidity = this.state.section[id].temperature;
    let temperature = 30;

    let fill = '';
    if (humidity >= 80 && temperature >=35) {
      fill = 'danger';
    } else if (humidity >= 75 && temperature >= 33) {
      fill = 'alert';
    } else {
      fill = 'normal';
    };
    return fill;
  }

  handleClick(id) {
    this.setState({id: id});
  }

  render() {
    let info = ''
    // if this.state.proceed 
    if (this.state.section.length)
    return (
      <div>
        <header style={{height:window.innerHeight*0.1+'px'}}><p id='element'>ELEMENT</p></header>
        <div style={{display:'float'}}>
          <div className="Map" style={{height:window.innerHeight*0.8+'px', float:'left'}}>
            <A onClick={this.handleClick.bind(this, 2)} className={this.handleColour(2)} style={{position:'relative',transform:'scale(0.3)',top:-140+'px',left:-25+'px'}}/>
            <B onClick={this.handleClick.bind(this, 3)} className={this.handleColour(3)} style={{position:'relative',transform:'scale(0.33)',top:-482+'px',left:-138+'px'}}/>
            <C onClick={this.handleClick.bind(this, 4)} className={this.handleColour(4)} style={{position:'relative',transform:'scale(0.48)',top:-838+'px',left:42+'px'}}/>
            <D onClick={this.handleClick.bind(this, 5)} className={this.handleColour(5)} style={{position:'relative',transform:'scale(0.2)',top:-1201+'px',left:101+'px'}}/>
            <E onClick={this.handleClick.bind(this, 0)} className={this.handleColour(0)} style={{position:'relative',transform:'scale(0.37)',top:-1458+'px',left:136+'px'}}/>
            <F onClick={this.handleClick.bind(this, 1)} className={this.handleColour(1)} style={{position:'relative',transform:'scale(0.3)',top:-1635+'px',left:83+'px'}}/>
          </div>
          <Info id={this.state.id} section={this.state.section} />
        </div>
      </div>
    );
    return (
      <div>
        Loading...
      </div>
    )
  }
}

export default App;
