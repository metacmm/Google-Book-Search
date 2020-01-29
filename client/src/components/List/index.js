import React from "react";

export function List({children}) {
    return (
        <div>
            {children}
        </div>);
}

export function ListItem() {
    return (
        <div className="border p-4 m-2">
            <div className="row">
                <h5>Title</h5>
            </div>
            <div className="row">
                <p>Summary</p>
            </div>
            <div className="row">                
                <p className="card-text"><small className="text-muted">written by</small></p>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <img />
                </div>
                <div className="col-md-10">
                <p>
                        description
                </p>
                </div>
            </div>
        </div>);
}