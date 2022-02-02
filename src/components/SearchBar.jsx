import React from "react";
import {Paper, TextField, Typography} from "@material-ui/core";
import "../styles/SearchBar.css";

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
            <Paper elevation = {6} style = {{padding: "25px", backgroundColor: "#fff"}}>
                <form onSubmit = {this.handleSubmit}>
                    <TextField fullWidth label = "Search A Video" onChange = {this.handleChange}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;