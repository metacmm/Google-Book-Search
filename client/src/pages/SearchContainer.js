import React, { Component } from "react";


import SearchBar from "../components/SearchBar";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

class SearchContainer extends Component {
    state = {
        books: [],
        title: ""
    }
    
    handleSubmit = function(event){
        event.preventDefault();
        API.getAll(this.state.title).then(function(data){
            this.setState({
                books: data.items
            });
        });
    }

    handleInputChange = function(event){
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <SearchBar handleSubmit={this.handleSubmit}/>
                <List>
                    {this.state.books.map(element => {
                        return new {
                            "title": element.volumeInfo.title,
                            "author": element.volumeInfo.authors.join(","),
                            "description": element.description,
                            "image": element.imageLinks.thumbnail,
                            "link":element.selfLink
                        }
                    })}
                </List>
            </div>
        );
    }
}

export default SearchContainer;