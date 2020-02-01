import React from "react";

export function ButtonDelete(props){
    return(
        <button 
            id={props.id} 
            onClick={props.handleClickEvent}
            className="btn btn-secondary"
        >Delete
        </button>
    )
}

export function ButtonSave(props){
    return(
        <button 
            id={props.id} 
            onChange={props.handleClickEvent} 
            type="radio" 
            className="btn btn-primary" 
            data-toggle="button">
            Save
        </button>
    )
}