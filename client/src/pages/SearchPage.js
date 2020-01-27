import React, {Component} from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
class SearchPage extends Component{
    render(){
        return (
            <div className="container-fluid">
                <Nav />
                <Jumbotron />
                <SearchBar />
            </div>
        );
    }
}

export default SearchPage;