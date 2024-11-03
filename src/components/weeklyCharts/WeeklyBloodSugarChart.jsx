import React from "react";
import { daysOfWeek } from "../../utilities/utilsFunctions.js";
import Chart from "react-apexcharts";

const WeeklyBloodSugarChart = () => {
  const bloodSugarLevelChart = {
    series: [
      {
        name: "Before Meal",
        data: [70, 80, 85, 72, 70, 85, 72],
      },
      {
        name: "After Meal",
        data: [100, 110, 125, 112, 110, 125, 112],
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
              filename: `daily_blood_sugar`, // Custom filename for the exported CSV
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
          return val.toLocaleString() + " mg/dL";
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
            return val.toLocaleString() + " mg/dL";
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
        options={bloodSugarLevelChart.options}
        series={bloodSugarLevelChart.series}
        type="bar"
        height={325}
      />
    </>
  );
};
export default WeeklyBloodSugarChart;
