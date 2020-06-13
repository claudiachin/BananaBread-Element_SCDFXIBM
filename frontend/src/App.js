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
  }

  handleColour() {
    let humidity = 75;
    let temperature = 35;

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

  render() {
    return (
      <div className="App" style={{height:window.innerHeight*0.8+'px'}}>
        <One className={this.handleColour()} style={{position:'relative',transform:'scale(0.3)',top:-140+'px',left:-25+'px'}}/>
        <Two className={this.handleColour()} style={{position:'relative',transform:'scale(0.33)',top:-482+'px',left:-138+'px'}}/>
        <Three className={this.handleColour()} style={{position:'relative',transform:'scale(0.48)',top:-838+'px',left:42+'px'}}/>
        <Four className={this.handleColour()} style={{position:'relative',transform:'scale(0.2)',top:-1201+'px',left:101+'px'}}/>
        <Five className={this.handleColour()} style={{position:'relative',transform:'scale(0.37)',top:-1458+'px',left:136+'px'}}/>
        <Six className={this.handleColour()} style={{position:'relative',transform:'scale(0.3)',top:-1635+'px',left:83+'px'}}/>
      </div>
    );
  }
}

export default App;
