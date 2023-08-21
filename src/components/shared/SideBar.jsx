import React, { useState, useEffect } from "react";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../lib/consts/navigation";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

const linkClasses =
  "flex item-center gap-1 font-normal text-md px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

export default function SideBar({ handlesignout }) {
  const [bar, setBar] = useState(true);

  const Closebar = () => {
    if (bar === false) {
      setBar(true);
    } else {
      setBar(false);
    }
  };
  return (
    <div>
      <button>
        <NavLink
          style={{
            textDecoration: "none",
            color: "black",
            fontFamily: "Roboto",
            fontSize: "25px",
            display: "flex",
            margin: "10px",
          }}
          onClick={Closebar}
        >
          {!bar ? <BiChevronRightCircle /> : <BiChevronLeftCircle />}
        </NavLink>
      </button>
      {bar ? (
        <div className="m-4 z-50 md:z-0 fixed backdrop-blur-sm md:static w-[100vw] md:w-60  h-[100vh] ">
          <div
            className="w-[calc(100%-1.75rem)] bg-neutral-900 md:w-64 p-7 flex flex-col rounded-2xl text-white h-screen"
            style={{ height: "680px" }}
          >
            <div className="flex items-center gap-2 px-4 py-3">
              <span className="text-neutral-100 text-3xl font-bold">Board</span>
            </div>
            <div className="flex-1 py-4 flex flex-col gap-2">
              {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                <SidebarLink key={item.key} item={item} />
              ))}
            </div>
            <div>
              {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                <Link
                  to={item.path}
                  className="flex item-center gap-0.2 font-normal  px-3 py-1 text-white hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-xs"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div
              className={classNames("text-red-400 cursor-pointer", linkClasses)}
            >
              <span className="text-xl">{<HiOutlineLogout />}</span>
              <button onClick={handlesignout}>Log out</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClasses
      )}
    >
      <span className="text-xl mr-3">{item.icon}</span>
      {item.label}
    </Link>
  );
}
