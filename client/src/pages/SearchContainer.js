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
                books: bookData.data.items
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
                    {this.state.books.map(element =>
                        <ListItem
                            key={element.volumeInfo.id}
                            title={element.volumeInfo.title}
                            author={element.volumeInfo.hasOwnProperty("authors")? element.volumeInfo.authors.join(",") : ""}
                            description={element.volumeInfo.description}
                            image={element.volumeInfo.imageLinks.thumbnail}
                            link={element.volumeInfo.previewLink}
                        />
                    )}
                </List>
            </div>
        );
    }
}

export default SearchContainer;