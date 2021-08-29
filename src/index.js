import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './components/app/index';
import PulseDb from "./db/dbProcessing";
import PulseService from "./services/pulseService";

const getTest = new PulseService();
const {milk} = PulseDb();

getTest.getResource(milk)
    .then(response => {
        response.forEach(item => console.log(item.UF_LESS10MIN));
    })
    .catch(error => console.error(error));

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
