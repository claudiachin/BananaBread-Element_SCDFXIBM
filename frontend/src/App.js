import React from 'react';
import './App.css';
import { ReactComponent as One } from './1.svg';
import { ReactComponent as Two } from './2.svg';
import { ReactComponent as Three } from './3.svg';
import { ReactComponent as Four } from './4.svg';
import { ReactComponent as Five } from './5.svg';
import { ReactComponent as Six } from './6.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {location: 0}
  }

  handleColour() {
    let humidity = 70;
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
    this.setState({location: id});
    alert('Clicked '+id);
  }

  render() {
    return (
      <div className="App" style={{height:window.innerHeight*0.8+'px'}}>
        <One onClick={this.handleClick.bind(this, 1)} className={this.handleColour()} style={{position:'relative',transform:'scale(0.3)',top:-140+'px',left:-25+'px'}}/>
        <Two onClick={this.handleClick.bind(this, 2)} className={this.handleColour()} style={{position:'relative',transform:'scale(0.33)',top:-482+'px',left:-138+'px'}}/>
        <Three onClick={this.handleClick.bind(this, 3)} className={this.handleColour()} style={{position:'relative',transform:'scale(0.48)',top:-838+'px',left:42+'px'}}/>
        <Four onClick={this.handleClick.bind(this, 4)} className={this.handleColour()} style={{position:'relative',transform:'scale(0.2)',top:-1201+'px',left:101+'px'}}/>
        <Five onClick={this.handleClick.bind(this, 5)} className={this.handleColour()} style={{position:'relative',transform:'scale(0.37)',top:-1458+'px',left:136+'px'}}/>
        <Six onClick={this.handleClick.bind(this, 6)} className={this.handleColour()} style={{position:'relative',transform:'scale(0.3)',top:-1635+'px',left:83+'px'}}/>
      </div>
    );
  }
}

export default App;
