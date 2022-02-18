import React from "react";
import { Grid } from "@material-ui/core";
import youtube from "./API/youtube";
import "./styles.css";

import {SearchBar, VideoDetails, VideoList} from "./components";

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.handleSubmit("Apex Legends Patch Notes");
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get("search", {params: {q: searchTerm}});

        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }

    render() {

        const { selectedVideo, videos } = this.state;

        return (
            <Grid justifyContent = "center" container spacing = {10}>
                <Grid item xs = {12}>
                    <Grid container spacing = {10}>
                        <Grid item xs = {12}>
                           <SearchBar onFormSubmit = {this.handleSubmit}/>
                        </Grid>

                        <Grid item xs = {6} style = {{padding: "2vw", backgroundColor: "#333", marginLeft: "2vw", borderRadius: "10px"}}>
                           <VideoDetails video = {selectedVideo}/>
                        </Grid>

                        <Grid item xs = {4}>
                            <VideoList videos = {videos} onVideoSelect = {this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;