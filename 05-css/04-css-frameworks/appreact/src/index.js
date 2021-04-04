import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import 'bootstrap/dist/js/bootstrap.bundle.min.js' => comentado pq não preciso dele ao usar React-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
