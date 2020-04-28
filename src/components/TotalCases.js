import React from "react";
import { BarChart } from "./BarChart";
import { LineChart } from "./LineChart";

export const TotalCases = () => {
  return (
    <>
      <h1 className="heading-secondary">Analytics</h1>

      <LineChart />
      <BarChart />
    </>
  );
};
