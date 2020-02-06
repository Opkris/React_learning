import React from "react";


export function Jokes(props) {

    return(
        <div className={"Jokes"}>
            <h3>Joke: {props.content.Joke}</h3>
            <p>PunchLine: {props.content.punchLine}</p>

        </div>
    )
}