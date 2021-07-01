import ReactDom from 'react-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import App from "./App";
import {BrowserRouter} from "react-router-dom";


ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ,document.getElementById("root"));
