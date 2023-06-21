import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';

hydrate(<BrowserRouter><App/></BrowserRouter>, document.getElementById("root"))


