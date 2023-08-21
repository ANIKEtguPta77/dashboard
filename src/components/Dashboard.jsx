import React from "react";
// import { Link } from "react-router-dom";
import DashboardStatsGrid from "./DashboardStatsGrid";
import TransactionsChart from "./TransactionsChart";
import Bottom from "./Bottom";

export default function Dashboard() {
  return (
    <div className="flex gap-4 ml-10 mb-10 mt-6 flex-col ">
      <DashboardStatsGrid />
      <TransactionsChart />
      <Bottom />
    </div>
  );
}
