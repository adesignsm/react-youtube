import React from "react";
import {Paper, TextField, Typography} from "@material-ui/core";

class SearchBar extends React.Component {

    state = {
        searchTerm: ""
    }

    handleChange = (event) => {
        this.setState({searchTerm: event.target.value});
    }

    handleSubmit = (event) => {
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();
    }

    render () {

        return (
            <Paper className = "search-bar" elevation = {6} style = {{padding: "1vw", backgroundColor: "#333"}}>
                <Typography variant = "h3" color = "secondary" style = {{fontWeight: "lighter", color: "#fff"}}> Custom Youtube App </Typography>
                <form className = "form-input" onSubmit = {this.handleSubmit}>
                    <TextField fullWidth label = "Search A Video" onChange = {this.handleChange}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;