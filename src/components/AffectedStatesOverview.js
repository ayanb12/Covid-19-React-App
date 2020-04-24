import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AffectedStates } from "./AffectedStates";
import moment from "moment";

export const AffectedStatesOverview = ({ selectValue }) => {
  const [startDate, setStartDate] = useState(
    moment(new Date()).format("MM-DD-YYYY")
  );

  //   Storing data of fetched Cases as Array
  const [dataObj, setDataObj] = useState([
    {
      lastUpdate: moment().format("MMMM Do YYYY"),
      confirmed: 0,
      deaths: 0,
    },
  ]);

  //   Fetching and Modifying the Country details for selected date
  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/daily/${startDate}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          const filteredData = data
            .filter((el) => el.countryRegion === selectValue)
            .map((el) => {
              if (el.provinceState.length > 0) {
                return {
                  lastUpdate: moment(el.lastUpdate).format("MMM Do YY"),
                  name: el.provinceState,
                  confirmed: el.confirmed,
                  deaths: el.deaths,
                };
              } else {
                return {
                  lastUpdate: moment(el.lastUpdate).format("MMM Do YY"),
                  name: el.countryRegion,
                  confirmed: el.confirmed,
                  deaths: el.deaths,
                };
              }
            })
            .slice(0, 12);
          setDataObj(filteredData);
        } else {
          setDataObj([
            {
              noData: "Sorry, Found Nothing Today, Select Another Date.",
            },
          ]);
        }
      });
  }, [selectValue, startDate]);

  //   When User will change the Date
  const handleChange = (date) => {
    let formattedDate = moment(new Date(date)).format("MM-DD-YYYY");
    setStartDate(formattedDate);
  };

  return (
    <section className="affected-states">
      <div className="container scrollbar">
        <div className="affected-headings">
          <h1 className="heading-secondary">
            <span className="color">Historical Data of {selectValue}</span> -{" "}
            <span className="color2">Select A Date</span>
          </h1>
          <DatePicker
            className="view-all"
            selected={new Date(startDate)}
            onChange={handleChange}
          />
        </div>
        <div className="table-wrapper">
          <table className="table-affected-states">
            <thead>
              <tr>
                <th>
                  Country / State <i className="fas fa-globe-africa"></i>
                </th>
                <th>
                  Day <i className="far fa-calendar-alt"></i>
                </th>
                <th>
                  Confirmed <i className="fas fa-caret-down"></i>
                </th>
                <th>
                  Deaths <i className="fas fa-caret-down"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {dataObj.map((obj, index) => (
                <AffectedStates key={index} obj={obj} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
