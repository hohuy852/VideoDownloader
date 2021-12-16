import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideo } from "../store/reducer/video";
export const Downloader = (location) => {

  const [url, setUrl] = useState("");
  //const [loading, setloading] = useState(false)
  const dispatch = useDispatch();
  const changeURL = (event) => {
    setUrl(event.target.value);
  };
  // useEffect(()=>{
  //   const params = new URLSearchParams(location.search);
  // },[])
  const postURL = (event) => {
    event.preventDefault();
    dispatch(getVideo(url));
  };
  return (
    <div className="container pt-48">
      <div className="url-input w-full ">
        <form onSubmit={postURL} className="rounded px-8 ">
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 text-lg font-bold px-2 mb-2 "
            >
              Video URL:
            </label>
            <input
              className="shadow appearance-none border rounded w-full text-lg py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={url}
              onChange={changeURL}
              placeholder="https://www.youtube.com/watch?v=videoID"
            />

            <button
              className="block max-w-md py-2 font-medium px-4 border-2 border-purple-600 rounded mt-6  hover:bg-purple-300 bg-purple-600 hover:text-purple-600 text-white mx-auto"
              type="submit"
            > 
              Download
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
