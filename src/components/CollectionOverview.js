import React from "react";
import CountryItem from "./CountryItem";

export const CollectionOverview = ({ selectValue }) => {
  return (
    <section className="country-details">
      <div className="container">
        <h1 className="heading-secondary">Country Details</h1>
        <CountryItem selectValue={selectValue} />
      </div>
    </section>
  );
};
