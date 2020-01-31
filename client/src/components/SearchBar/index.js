import React from "react";
import { PromiseProvider } from "mongoose";

function SearchBar(props) {
    return (
        <div className="border p-3 m-2">
            <form>
                <div className="form-group">
                    <label for="searchBookInput">Search Book</label>
                    <input type="text" className="form-control" name="title" id="searchBookInput" value={props.value} onChange={props.handleInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={props.handleSubmit}>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;