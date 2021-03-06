import axios from "axios";


const API_KEY = process.env.REACT_APP_YOUTUBE_PUBLIC_KEY;

export default axios.create({

    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 15,
        key: API_KEY
    }
});