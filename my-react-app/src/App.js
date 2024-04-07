import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css'


import Sidebar from './Sidebar'; // Correct import path for Sidebar
import Home from './Home'; // Correct import path for Home


function App() {
  return (
    <div className='container-fluid  custom-bg min-vh-100'>
      <div className='row '>
        <div className='col-2 min-vh-100 sidebarColor-bg'>
          <Sidebar />
        </div>
        <div className="col">
          <Home />
        </div>
      </div>

    </div>
  );
}

export default App;
