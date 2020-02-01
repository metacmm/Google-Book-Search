import React from "react";
import { ButtonSave, ButtonDelete } from "../Button";

export function List({ children }) {
    return (
        <div>
            {children}
        </div>);
}

export function ListItem(props) {
    const button = props.isSavePage ? <ButtonDelete id={props.id} handleClickEvent={props.handleDeleteBook} /> :
        <ButtonSave id={props.id} handleClickEvent={props.handleSaveBook} />;
    return (
        <div className="border p-4 m-2">
            <div className="row d-flex justify-content-between">
                <div className="col-10">
                    <h5>{props.title}</h5>
                </div>
                <div className="col-2 d-flex justify-content-end">
                    <a className="btn btn-secondary mx-1 active" role="button" href={props.link} ariaPressed="true">view</a>
                    {button}
                </div>
            </div>
            <div className="row">
                <p className="card-text"><small className="text-muted">written by: {props.author}</small></p>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <img src={props.image} />
                </div>
                <div className="col-md-10">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>);
}