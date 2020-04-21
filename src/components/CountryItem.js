import React from "react";

const CountryItem = (props) => {
  const { confirmed, recovered, deaths } = props.countryData;
  console.log(confirmed.value);
  return (
    <div className="parent-card">
      <div className="card">
        <i className="fas fa-user-friends"></i>
        <h2 className="heading-primary">1111</h2>
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
};

export default CountryItem;
