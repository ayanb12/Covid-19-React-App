import React, { useState, useEffect } from "react";
import { CountryDetails } from "./CountryDetails";

export const Header = () => {
  const [countryData, setCountryData] = useState([]);
  const [selectValue, setSelectValue] = useState("Afghanistan");

  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/countries`)
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data.countries);
      });
  }, []);

  return (
    <React.Fragment>
      <nav className="main-nav">
        <div className="container wrapper">
          <div>
            <span className="logo-name">
              C
              <span>
                <i className="fas fa-virus"></i>
              </span>
              vid-19
            </span>
            <i className="far fa-chart-bar"></i>
          </div>
          <select
            className="country-select"
            onChange={(e) => setSelectValue(e.target.value)}>
            {countryData.map((data, index) => (
              <option key={index} value={data.name}>
                {data.name}
              </option>
            ))}
          </select>
        </div>
      </nav>

      <CountryDetails selectValue={selectValue} />
    </React.Fragment>
  );
};
