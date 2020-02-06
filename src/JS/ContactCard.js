import React from "react";


export function ContactCard(props) {



    return(
        <div className={"contact-card"}>
            <img src={props.contact.imageURL}/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
            <p>Address: {props.contact.address}</p>
        </div>
    )
}
