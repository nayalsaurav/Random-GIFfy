import React, { useState } from "react";
import { useEffect } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const Tag = () => {
  const [tag, setTag] = useState("Goku");
  const { gif, loader, fetchData } = useGif(tag);

  const onClickHandler = () => {
    fetchData(tag);
  };

  function onChangeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-between border-2 border-gray-200 p-4 shadow-md shadow-white min-w-[200px] md:min-h-[400px] md:min-w-[400px] gap-3 rounded-xl">
      <h1 className="text-2xl font-semibold text-textPrimary">
        Random {tag} GIF
      </h1>
      {loader ? (
        <Spinner />
      ) : gif ? (
        <img
          src={gif}
          alt={tag}
          className="object-cover rounded-lg shadow-md"
        />
      ) : (
        <p className="text-white">No GIF found for "{tag}"</p>
      )}
      <div className="flex flex-col gap-4 w-full">
        <input
          type="text"
          value={tag}
          onChange={onChangeHandler}
          placeholder="Enter a tag"
          className="w-full border-2 border-gray-200 rounded py-3 px-2 text-xl font-semibold text-center text-black"
        />
        <button
          onClick={onClickHandler}
          className="w-full px-6 py-3 bg-accent1 text-white rounded-lg hover:bg-yellow-600 dark:hover:bg-yellow-400 transition-all"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Tag;
