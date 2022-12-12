import React from "react";
import ReactDOM from "react-dom/client"
import {HelloWorldApp} from "./HelloWorldApp.jsx";

// const App = () => {
//
//     return (<h1>Hola mundo!!</h1>);
// }

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<App></App>*/}
        <HelloWorldApp></HelloWorldApp>
    </React.StrictMode>
);