import React from "react";
import {Fragment} from "react";
import PropTypes from 'prop-types';

function upperCase(string) {
    return string.toUpperCase();
}

export const FirstApp = ({title, number}) => {
    const nombre = 'Israel';
    const newMessage = {
        nombre: 'Israel',
        apellido: 'Perez'
    }
    // if (!title) {
    //     throw new Error('El título no existe!');
    // }

    return (
        <>
            <h1>Hola {upperCase(nombre)}!</h1>
            <h1> {title} {number + 1}</h1>
            {/*<code>{JSON.stringify(newMessage)}</code>*/}
            <code>{JSON.stringify(newMessage)}</code>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number,
}