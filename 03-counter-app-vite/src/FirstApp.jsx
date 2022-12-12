import React from "react";
import {Fragment} from "react";


function upperCase(string) {
    return string.toUpperCase();
}

export const FirstApp = (props) => {
    console.log({props});
    const nombre = 'Israel';
    const newMessage = {
        nombre: 'Israel',
        apellido: 'Perez'
    }


    return (
        <>
            <h1>Hola {upperCase(nombre)}!</h1>
            <h1> {props.title}</h1>
            {/*<code>{JSON.stringify(newMessage)}</code>*/}
            <code>{JSON.stringify(newMessage)}</code>
        </>
    );
}