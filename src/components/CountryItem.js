import React, { Component } from "react";

class CountryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmedCount: 0,
      recoveredCount: 0,
      deathCount: 0,
    };
  }

  render() {
    return (
      <div className="parent-card">
        <div className="card">
          <i className="fas fa-user-friends"></i>
          <h2 className="heading-primary">2181508</h2>
          <span className="count">Confirmed</span>
        </div>
        <div className="card">
          <i className="fas fa-user-shield"></i>
          <h2 className="heading-primary">21815</h2>
          <span className="count">Recovered</span>
        </div>
        <div className="card">
          <i className="fas fa-user-alt-slash"></i>
          <h2 className="heading-primary">2181</h2>
          <span className="count">Deaths</span>
        </div>
      </div>
    );
  }
}

export default CountryItem;
