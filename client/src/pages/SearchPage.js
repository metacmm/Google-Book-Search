import React, {Component} from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import {List, ListItem} from "../components/List";

class SearchPage extends Component{
    render(){
        return (
            <div className="container-fluid">
                <Nav />
                <Jumbotron />
                <SearchBar />
                <List>
                    <ListItem />
                    <ListItem />
                </List>
            </div>
        );
    }
}

export default SearchPage;