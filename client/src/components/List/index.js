import React from "react";
import { PromiseProvider } from "mongoose";

export function List({children}) {
    return (
        <div>
            {children}
        </div>);
}

export function ListItem(props) {
    return (
        <div className="border p-4 m-2">
            <div className="row">
                <h5>{props.title}</h5>
            </div>
            <div className="row">
                <p>{props.description}</p>
            </div>
            <div className="row">                
                <p className="card-text"><small className="text-muted">written by: {props.author}</small></p>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <img src={props.image}/>
                </div>
                <div className="col-md-10">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>);
}