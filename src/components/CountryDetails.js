import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

export const CountryDetails = ({ selectValue }) => {
  const [countryData, setCountryData] = useState({
    confirmed: 0,
    recovered: 0,
    deaths: 0,
  });

  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/countries/${selectValue}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryData({
          confirmed: data.confirmed.value,
          recovered: data.recovered.value,
          deaths: data.deaths.value,
        });
      });
  }, [selectValue]);

  return (
    <section className="country-details">
      <div className="container">
        <h1 className="heading-secondary">Country Details</h1>
        <div className="parent-card">
          <div className="card">
            <i className="fas fa-user-friends"></i>
            <CountUp start={0} end={countryData.confirmed}>
              {({ countUpRef }) => (
                <h2 className="heading-primary" ref={countUpRef}>
                  {""}
                </h2>
              )}
            </CountUp>
            <span className="count">Confirmed</span>
          </div>
          <div className="card">
            <i className="fas fa-user-shield"></i>
            <CountUp start={0} end={countryData.recovered}>
              {({ countUpRef }) => (
                <h2 className="heading-primary" ref={countUpRef}>
                  {""}
                </h2>
              )}
            </CountUp>
            <span className="count">Recovered</span>
          </div>
          <div className="card">
            <i className="fas fa-user-alt-slash"></i>
            <CountUp start={0} end={countryData.deaths}>
              {({ countUpRef }) => (
                <h2 className="heading-primary" ref={countUpRef}>
                  {""}
                </h2>
              )}
            </CountUp>
            <span className="count">Deaths</span>
          </div>
        </div>
      </div>
    </section>
  );
};
