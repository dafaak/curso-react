import React from "react";
import ReactDOM from "react-dom/client"
import {HelloWorldApp} from "./HelloWorldApp.jsx";
import {FirstApp} from "./FirstApp.jsx";
import './styles.css';
import {CounterApp} from "./CounterApp.jsx";
// const App = () => {
//
//     return (<h1>Hola mundo!!</h1>);
// }

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<App></App>*/}
        {/*<HelloWorldApp/>*/}
        {/*<FirstApp />*/}
        <CounterApp value={1}></CounterApp>
    </React.StrictMode>
);