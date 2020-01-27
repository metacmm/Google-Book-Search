import React from "react";

function SearchBar() {
    return (
        <div className="border p-3 m-2">
            <form>
                <div className="form-group">
                    <label for="searchBookInput">Search Book</label>
                    <input type="text" className="form-control" id="searchBookInput"/>
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;