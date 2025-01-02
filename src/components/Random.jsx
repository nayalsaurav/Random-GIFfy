import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
    const {gif,loader,fetchData} = useGif();
    const onClickHandler = () => {
        fetchData();
        console.log("Button clicked");
    };
    return (
      <div className="flex flex-col items-center justify-between border-2 border-gray-200 p-4 shadow-md shadow-white min-w-[200px] md:min-h-[400px] md:min-w-[400px] gap-3 rounded-xl">
        <h1 className="text-2xl font-semibold text-textPrimary">
          A Random GIF
        </h1>
        {loader ? (
          <Spinner />
        ) : (
          <img src={gif} alt="" className="object-cover rounded-lg shadow-md" />
        )}
        <button
          onClick={onClickHandler}
          className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-all"
        >
          Generate
        </button>
      </div>
    );
};

export default Random;
