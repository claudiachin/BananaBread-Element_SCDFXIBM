import React from 'react';
import './App.css';

export default class App extends React.Component {
  state = {
      color: "#8bbf41",
      section: [],
      fire: "Low",
  };

  async componentDidMount() {
    const url = "https://damp-journey-05387.herokuapp.com/get-data";
    const response = await fetch(url);
    const data  = await response.json();
    this.setState({section: data});
    //setInterval(this.componentDidMount, 5000);
  }

  render() {

          return (
              <div>
                  <h1 className={"Apptitle"}>ELEMENTS</h1>
        {this.state.section.map(sec => (
            <div>
            <h2 className={"Appinfo"}>Area Name: {sec.location}</h2>
            <h3 className={"Appinfo"}>Humidity: {sec.humidity}%</h3>
            <h3 className={"Appinfo"}>Temperature: {sec.temperature}&deg;C</h3>
                <h3 className={"Appinfo"} /*style={{backgroundColor: this.state.color}}*/>Likeliness of fire: {this.state.fire}</h3>

          </div>
        ))}
      </div>
          );
      }}