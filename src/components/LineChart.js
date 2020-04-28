import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js";
import moment from "moment";
// --Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.elements.line.tension = 0;

export const LineChart = () => {
  const [chartData, setChartData] = useState({});

  const renderCharts = () => {
    //   Main object for state
    const chartObj = {
      labels: [],
      datasets: [
        {
          data: [],
          label: "Confirmed",
          fill: true,
          borderColor: "#6610f2",
        },
        {
          data: [],
          label: "Deaths",
          fill: true,
          borderColor: "#F46036",
        },
      ],
    };

    // Fetching the data from API
    fetch(`https://covid19.mathdro.id/api/daily`)
      .then((res) => res.json())
      .then((data) => {
        // Creating the labels in x-axis
        data.forEach((el) => {
          chartObj.labels.push(moment(el.reportDate).format("MMM Do"));
        });
        // Creating the labels in y-axis
        // Confirmed array
        const confirmedArray = [];
        data.forEach((el) => confirmedArray.push(el.confirmed.total));
        chartObj.datasets[0].data = confirmedArray;

        // Deaths array
        const deathsArray = [];
        data.forEach((el) => deathsArray.push(el.deaths.total));
        chartObj.datasets[1].data = deathsArray;

        setChartData(chartObj);
      });
  };

  useEffect(() => {
    renderCharts();
  }, []);

  return (
    <div className="line-chart">
      <h2 className="line-chart-heading">Total Cases (Worldwide)</h2>
      <Line
        data={chartData}
        options={{
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  beginAtZero: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};
