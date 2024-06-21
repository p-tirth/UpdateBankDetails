import React from "react";

import { RxDashboard } from "react-icons/rx";
import { MdOutlineSummarize } from "react-icons/md";
import { CiBank } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";
import { IoIosArrowRoundBack } from "react-icons/io";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div
      className={`bg-white h-vh shadow-md w-full space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:relative lg:translate-x-0 lg:w-64 transition duration-200 ease-in-out`}
    >
      <nav>
      <button className="ml-3 mb-2" onClick={()=>{setSidebarOpen(false)}}>
      <IoIosArrowRoundBack size={25} />
      </button>
        <div className="flex justify-between items-center px-3">
          <a
            href="#"
            className="flex items-center justify-start gap-3 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
          >
            {" "}
            <p>
              <RxDashboard />
            </p>
            My Dashboard{" "}
          </a>
          <p>
            <GoChevronRight />
          </p>
        </div>
        <hr />
        <div className="flex justify-between items-center px-3">
          <a
            href="#"
            className="flex items-center justify-start gap-3 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
          >
            <p>
              <FaLink />
            </p>
            TOTM links{" "}
          </a>
          <p>
            <GoChevronRight />
          </p>
        </div>
        <hr />
        <div className="flex justify-between items-center px-3">
          <a
            href="#"
            className="flex items-center justify-start gap-3 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
          >
            <p>
              <MdOutlineSummarize />
            </p>
            Daily Summary{" "}
          </a>
          <p>
            <GoChevronRight />
          </p>
        </div>
        <hr />
        <div className="flex justify-between items-center px-3">
          <a
            href="#"
            className="flex items-center justify-start gap-3 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
          >
            <p>
              <CiBank />
            </p>
            Bank Details{" "}
          </a>
          <p>
            <GoChevronRight />
          </p>
        </div>
        <hr />
      </nav>
    </div>
  );
};
export default Sidebar;
