import React from "react";


export function Joke(props) {

    return(
        <div className={"Joke"}>
            <h3>Joke: {props.content.Joke}</h3>
            <p>PunchLine: {props.content.punchLine}</p>

        </div>
    )
}