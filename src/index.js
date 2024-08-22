// import React from "react";
// //import ReactDOM from "react-dom";
// import { createRoot } from 'react-dom/client';
// import App from './App';

// ReactDOM.render(<App/>, document.getElementById('root'));

// import { createRoot } from 'react-dom/client';
// import App from './App';

// const container = document.getElementById('root');

// // create a root
// const root = createRoot(container);

// //render app to root
// root.render(<App />);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
