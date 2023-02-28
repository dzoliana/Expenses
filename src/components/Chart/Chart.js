import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  //pretvaramo objekte dataPoints u JSX elemente tj u brojeve
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  //max zahtjeva list of arguments umjeto array pa koristimo spread operator za izvlačenje array elemenata
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
