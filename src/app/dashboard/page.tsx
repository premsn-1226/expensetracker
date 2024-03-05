import React from "react";
import LineChart from "./line-chart";

export default function dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <LineChart data="dashboard data for line chart"></LineChart>
    </div>
  );
}
