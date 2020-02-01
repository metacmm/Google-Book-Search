import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

class SearchContainer extends Component {
    state = {
        books: [],
        title: ""
    }

    handleSubmit = event => {
        event.preventDefault();
        API.getAll(this.state.title).then(bookData => {
            console.log(bookData.data.items);
            this.setState({
                books: bookData.data.items.map(item => 
                    ({
                        "title": item.volumeInfo.title,
                        "author": item.volumeInfo.authors? item.volumeInfo.authors.join(",") : "",
                        "description": item.volumeInfo.description,
                        "image": item.volumeInfo.imageLinks? item.volumeInfo.imageLinks.thumbnail : "",
                        "link": item.volumeInfo.previewLink
                    })
                )
            });
        });
    }

    handleInputChange = event => {
        console.log(event.target);
        const { name, value } = event.target;
        console.log(this);
        this.setState({
            [name]: value
        });
    }

    handleSaveBook = event => {
        console.log(event.target);
        const index = event.target.id;
        console.log(index);
        API.saveBook(this.state.books[index]).then(bookData => {
            console.log(bookData);
        });
    }

    render() {
        return (
            <div>
                <div className="border p-3 m-2">
                    <form>
                        <div className="form-group">
                            <label for="searchBookInput">Search Book</label>
                            <input type="text" className="form-control" name="title" id="searchBookInput" value={this.state.value} onChange={this.handleInputChange} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
                    </form>
                </div>
                <List>
                    {this.state.books.map((element,index) =>
                        <ListItem
                            {...element}
                            key = {index}
                            id = {index}
                            handleSaveBook = {this.handleSaveBook}
                        />
                    )}
                </List>
            </div>
        );
    }
}

export default SearchContainer;