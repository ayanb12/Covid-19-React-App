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
    try {
      fetch(`https://covid19.mathdro.id/api/daily/${startDate}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            const filteredCountry = data
              .filter((el) => el.countryRegion === selectValue)
              .map((el2) => {
                return {
                  lastUpdate: moment(el2.lastUpdate).format("MMMM Do YYYY"),
                  confirmed: +el2.confirmed,
                  deaths: +el2.deaths,
                };
              })
              .slice(0, 12);

            setDataObj(filteredCountry);
          } else {
            setDataObj([
              {
                noData: "Sorry, Found Nothing Today, Select Another Date.",
              },
            ]);
          }
        });
    } catch (err) {
      console.log("Nothing's there", err);
    }
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
            <span className="color">Cases of {selectValue}</span> -{" "}
            <span className="color2">Select A Date</span>
          </h1>
          <DatePicker
            className="view-all"
            selected={new Date(startDate)}
            onChange={handleChange}
          />
        </div>
        <div className="parent-card">
          {dataObj.map((obj, index) => (
            <AffectedStates key={index} obj={obj} dayNumber={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};
