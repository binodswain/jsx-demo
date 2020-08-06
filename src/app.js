// import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles/styles.scss';

import { h, render } from "../renderer";

const template = <p className="sample">Hello from react</p>;

// ReactDOM.render(template, document.getElementById('root'));

document.body.appendChild(  
    render( template )
);