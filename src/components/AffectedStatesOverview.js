import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AffectedStates } from "./AffectedStates";

export const AffectedStatesOverview = ({ selectValue }) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/countries/${selectValue}/confirmed`)
      .then((res) => res.json())
      .then((data) => {
        const statesArr = data.slice(0, 10);
        setStates(statesArr);
      });
  }, [selectValue]);

  console.log(states);

  return (
    <section className="affected-states">
      <div className="container scrollbar">
        <div className="affected-headings">
          <h1 className="heading-secondary">
            Affected States of - {selectValue}
          </h1>
          <Link to="#" className="view-all">
            See all 20 states <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </div>
        <div className="parent-card">
          <AffectedStates />
        </div>
      </div>
    </section>
  );
};
