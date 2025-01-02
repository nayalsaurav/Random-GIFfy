import React, { useState, useEffect } from "react";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = `https://api.giphy.com/v1/gifs/`;
const useGif = (tag) => {
    const [gif, setGif] = useState("");
    const [loader, setLoader] = useState(false);

    async function fetchData() {
        try {
            setLoader(true);
            // const { data } = await axios.get(
            //     tag
            //         ? `${baseUrl}search?api_key=${apiKey}&q=${tag}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
            //         : `${baseUrl}random?api_key=${apiKey}&tag=&rating=g`
            // );
            console.log(data);
            const imageUrl = tag ? data.data[0].images.fixed_height.url : data.data.images.fixed_height.url;
            console.log(data);
            setGif(imageUrl);
        } catch (error) {
            console.error("Error fetching GIF:", error);
        } finally {
            setLoader(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { gif, loader, fetchData };
};

export default useGif;
