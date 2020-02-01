import React from "react";

export function ButtonDelete(props){
    return(
        <button id={props.id} onClick={props.handleClickEvent}>Delete</button>
    )
}

export function ButtonSave(props){
    return(
        <button id={props.id} onClick={props.handleClickEvent}>Save</button>
    )
}