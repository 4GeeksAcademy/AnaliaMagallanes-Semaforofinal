import React from 'react'
import ReactDOM from 'react-dom/client'


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"


import '../styles/styles.css';





import TrafficLight from './components/TrafficLight';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <TrafficLight/>
  </React.StrictMode>
);
