import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import Router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={Router} />
)