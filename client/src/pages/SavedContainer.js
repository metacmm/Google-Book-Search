import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

class SavedContainer extends Component{
    state = {
        books:[],
        isSavePage: true
    }

    componentDidMount() {
        this.loadSavedBook();
    }
    
    handleDeleteBook = event => {
        const id = event.target.id;
        console.log(event.target);
        API.deleteBook(id).then(bookData =>
            console.log(bookData)
        );
        this.loadSavedBook();
    }

    loadSavedBook = () => {
        API.getSaved().then (bookData => {
            console.log(bookData);
            this.setState({
                books: bookData.data
            })
        })
    }

    render(){
        return(
        <List>
            {this.state.books.map(element =>
                <ListItem
                    {...element}
                    key = {element._id}
                    id = {element._id}
                    isSavePage = {this.state.isSavePage}
                    handleDeleteBook = {this.handleDeleteBook}
                />
            )}
        </List>)
    }
}

export default SavedContainer;