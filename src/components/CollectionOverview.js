import React, { useState, useEffect } from "react";
import CountryItem from "./CountryItem";

export const CollectionOverview = ({ selectValue }) => {
  const [countryData, setCountryData] = useState("");
  const [loading, setLoading] = useState(false);

  function loadData() {
    fetch(`https://covid19.mathdro.id/api/countries/${selectValue}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCountryData(data);
          setLoading(false);
        } else {
          setLoading(true);
        }
      });
  }

  useEffect(() => {
    loadData();
  }, [selectValue]);

  return (
    <section className="country-details">
      <div className="container">
        <h1 className="heading-secondary">Country Details</h1>
        {loading ? (
          <img
            src="../assets/spinner-gif-transparent-background-5.gif"
            alt=""
          />
        ) : (
          <CountryItem countryData={countryData} />
        )}
      </div>
    </section>
  );
};
