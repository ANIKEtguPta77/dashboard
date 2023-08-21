import React from "react";
import { Schedule } from "../data/mockData";

export default function Schedules() {
  return (
    <div className="flex flex-col bg-white rounded-lg md:w-1/2 w-11/12">
      <div className="flex flex-row justify-between m-6">
        <strong className="">Todays Schedules</strong>
        <span className="text-xs">See all ⌵</span>
      </div>
      <div className="flex flex-col ml-6 gap-2 overflow-y-auto">
        {Schedule.map((item) => (
          <div className="flex flex-row justify-start">
            <div className={`h-14 w-1 ${item.color}`}></div>
            <div className="flex flex-col ml-2 gap-0.5">
              <strong className="text-xs">{item.name}</strong>
              <span className="text-xs">{item.time}</span>
              <span className="text-xs">{item.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
