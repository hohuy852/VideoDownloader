import React, { useState } from "react";
import { useSelector } from "react-redux";
import { videoSelector } from "../store/reducer/video";
export const DownloadList = () => {
  const video = useSelector(videoSelector);
  const [isOpen, setIsOpen] = useState(false)
  let dropdownClass =
    "z-10 text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700";
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  if(isOpen){
    dropdownClass += ' block'
  }
  else{
    dropdownClass += ' hidden'
  }
  if (video.loading === true) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container flex justify-center mt-10">
        <div className="flex gap-x-4">
          <div className="w-52 h-28 rounded-xl">
            <img src={video.ytbVideo.thumb} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col ">
            <div className="font-bold max-w-lg text-2xl">
              {video.ytbVideo.title}
            </div>
            <div>Length: {video.ytbVideo.length}</div>
            <div>Author: {video.ytbVideo.author}</div>
          </div>
          <div className="flex flex-col">
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={handleClick}
            >
              Dropdown button{" "}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div id="dropdown" className={dropdownClass}>
              <ul className="py-1" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
