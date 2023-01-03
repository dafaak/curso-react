import React from "react";
import {Fragment} from "react";
import PropTypes from 'prop-types';

function upperCase(string) {
    return string.toUpperCase();
}

export const FirstApp = ({title, number = 1, name}) => {
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
            <h1>Hola {upperCase(name)}!</h1>
            <h1> {title} {number}</h1>
            {/*<code>{JSON.stringify(newMessage)}</code>*/}
            <code>{JSON.stringify(newMessage)}</code>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number,
    name: PropTypes.string
}
FirstApp.defaultProps = {
    title: 'No hay titulo',
    number: 'No hay numeros',
    name: 'Israel'
}