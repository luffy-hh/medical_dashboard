import React from "react";
import Chart from "react-apexcharts";
import { daysOfWeek } from "../../utilities/utilsFunctions.js";

const WeeklyTemperatureChart = () => {
  const temperatureChart = {
    series: [
      {
        name: "Temperature",
        data: [97, 95, 99.5, 98, 95, 96.2, 98],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
          offsetX: 0,
          offsetY: -10,
          export: {
            csv: {
              filename: `daily_temperature`, // Custom filename for the exported CSV
              headerCategory: "Days", // Custom title for the category column
            },
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        formatter: function (val) {
          return val.toLocaleString() + " ºF";
        },
        style: {
          fontSize: "12px",
          colors: ["#4A21AB", "#304758"],
        },
      },
      stroke: {
        show: false,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: daysOfWeek,
      },
      yaxis: {
        show: true,
      },
      fill: {
        opacity: 1,
      },
      colors: ["#2196F3", "#E7515A"],
      legend: {
        show: true,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val.toLocaleString() + " ºF";
          },
        },
      },
      grid: {
        show: true,
        xaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
    },
  };
  return (
    <>
      <Chart
        options={temperatureChart.options}
        series={temperatureChart.series}
        type="bar"
        height={325}
      />
    </>
  );
};
export default WeeklyTemperatureChart;
