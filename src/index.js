import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const root = ReactDOM.hydrate(document.getElementById('root'), 
// <App />
// );
// hydrateRoot(document.getElementById('root'), 
// <App />)
hydrate(<BrowserRouter><App/></BrowserRouter>, document.getElementById("root"))

// setTimeout(() => {
//     root.render(
//         <App />
//     );

// }, 2000)
