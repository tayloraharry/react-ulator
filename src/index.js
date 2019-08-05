import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './components/calculator';

ReactDOM.render(
    <div id="wrapper">
        <div id="app">
            <Calculator />
        </div>
    </div>, 
    document.getElementById('root'));
