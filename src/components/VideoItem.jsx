import React from "react";
import {Grid, Paper, Typography} from "@material-ui/core";

const VideoItem = ({video, onVideoSelect}) => {
    
    return (
        <Grid item xs = {8} style = {{backgroundColor: "#3F51B5", borderRadius: "10px", marginBottom: "10px"}}>
            <Paper onClick = {() => onVideoSelect(video)} style = {{display: "flex", alignItems: "center", cursor: "pointer", marginBottom: "10px"}}>
                <img style = {{marginRight: "10px"}} alt = "thumbnail" src = {video.snippet.thumbnails.medium.url}/>
            </Paper>
            <Typography variant = "h6" style = {{color: "#fff", fontWeight: "lighter"}}><b>{video.snippet.title}</b></Typography>
        </Grid>
    )
}

export default VideoItem;