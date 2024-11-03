import React from "react";
import { daysOfWeek } from "../../utilities/utilsFunctions.js";
import Chart from "react-apexcharts";

const WeeklyBloodPressureChart = () => {
  const bloodPressureChart = {
    series: [
      {
        name: "Systolic",
        data: [120, 110, 125, 112, 110, 125, 112],
      },
      {
        name: "Diastolic",
        data: [80, 70, 85, 72, 70, 85, 72],
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
              filename: `daily_blood_pressure`, // Custom filename for the exported CSV
              headerCategory: "Day", // Custom title for the category column
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
          return val.toLocaleString() + " mmHg";
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
            return val.toLocaleString() + " mmHg";
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
        options={bloodPressureChart.options}
        series={bloodPressureChart.series}
        type="bar"
        width="100%"
        height={325}
      />
    </>
  );
};
export default WeeklyBloodPressureChart;
