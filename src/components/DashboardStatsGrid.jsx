import React from "react";
import { BsWallet2 } from "react-icons/bs";
import { HiTag } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";

export default function DashboardStatsGrid() {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-11/12">
      <div className="rounded-xl p-4 border border-gray-200 bg-green-100 flex-1 md:w-1/4">
        <div className="rounded-full flex flex-row justify-end font-extrabold ">
          <BsWallet2 fontSize={20} />
        </div>
        <div className="ml-4">
          <span className="text-xs font-bold">Total Revenues</span>
          <div className="mt-1">
            <strong className="font-extrabold text-l ">$12,31,31</strong>
          </div>
        </div>
      </div>
      <div className="rounded-xl p-4 border border-gray-200 bg-orange-100 flex-1 md:w-1/4">
        <div className="rounded-full flex flex-row justify-end font-extrabold ">
          <HiTag fontSize={20} />
        </div>
        <div className="ml-4">
          <span className="text-xs font-bold">Total Transactions</span>
          <div className="mt-1">
            <strong className="font-extrabold text-l ">31231</strong>
          </div>
        </div>
      </div>
      <div className="rounded-xl p-4 border border-gray-200 bg-red-100 flex-1 md:w-1/4">
        <div className="rounded-full flex flex-row justify-end font-extrabold ">
          <BiLike fontSize={20} />
        </div>
        <div className="ml-4 ">
          <span className="text-xs font-bold">Total Likes</span>
          <div className="mt-1">
            <strong className="font-extrabold text-l ">1231</strong>
          </div>
        </div>
      </div>
      <div className="rounded-xl p-4 border border-gray-200 bg-violet-100 flex-1 md:w-1/4">
        <div className="rounded-full flex flex-row justify-end font-extrabold ">
          <FiUsers fontSize={20} />
        </div>
        <div className="ml-4">
          <span className="text-xs font-bold">Total Users</span>
          <div className="mt-1">
            <strong className="font-extrabold text-l ">900</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
