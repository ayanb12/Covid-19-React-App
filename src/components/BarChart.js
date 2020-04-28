import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js";
import moment from "moment";
// --Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.elements.line.tension = 0;

export const BarChart = () => {
  const [chartData, setChartData] = useState({});
  const [selectInput, setSelectInput] = useState(7);

  //   Fetch chart data from API
  const renderCharts = () => {
    //   Main object for state
    const chartObj = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [],
          label: "Confirmed",
        },
        {
          data: [],
          backgroundColor: [],
          label: "Deaths",
        },
        {
          data: [],
          backgroundColor: [],
          label: "Recovered",
        },
      ],
    };

    // Fetching the data from API
    fetch(`https://disease.sh/v2/historical/all?lastdays=${selectInput}`)
      .then((res) => res.json())
      .then((data) => {
        // setting the labels
        const keysArr = Object.keys(data.cases);

        keysArr.forEach((el) =>
          chartObj.labels.push(moment(el).format("MMM Do"))
        );

        //  Confirmed Cases Values
        const confirmedArr = Object.values(data.cases).map((el) => el);
        chartObj.datasets[0].data = confirmedArr;

        //  Deaths Cases Values
        const deathsArr = Object.values(data.deaths).map((el) => el);
        chartObj.datasets[1].data = deathsArr;

        //  Recovered Cases Values
        const recoveredArr = Object.values(data.recovered).map((el) => el);
        chartObj.datasets[2].data = recoveredArr;

        // Fill Confimed background color array
        const confirmedColorArr = new Array(selectInput).fill("#6610f2");
        chartObj.datasets[0].backgroundColor = confirmedColorArr;

        // Fill Deaths background color array
        const deathsColorArr = new Array(selectInput).fill("#F46036");
        chartObj.datasets[1].backgroundColor = deathsColorArr;

        // Fill Recovered background color array
        const recoveredColorArr = new Array(selectInput).fill("#00f2a9");
        chartObj.datasets[2].backgroundColor = recoveredColorArr;

        // Setting the state
        setChartData(chartObj);
      });
  };

  useEffect(() => {
    renderCharts();
  }, [selectInput]);

  //   Handle change function for select
  const handleChange = (e) => {
    const value = e.target.value;
    setSelectInput(+value);
  };

  return (
    <>
      <div className="chart-header">
        <h2 className="bar-chart-heading">Past {selectInput} Days Data</h2>
        <div className="select">
          <select name="format" id="format" onChange={handleChange}>
            <option value="7">Past 7 days</option>
            <option value="14">Past 14 days</option>
            <option value="21">Past 21 days</option>
          </select>
        </div>
      </div>

      <Bar
        data={chartData}
        options={{
          responsive: true,
        }}
      />
    </>
  );
};
