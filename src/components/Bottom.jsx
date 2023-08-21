import React from "react";
import PieChart from "./PieChart";
import Schedule from "./Schedule";

export default function Bottom() {
  return (
    <div className="flex flex-col md:flex-row gap-2 h-64  w-full">
      <PieChart />
      <Schedule />
    </div>
  );
}
