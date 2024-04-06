import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css'


import Sidebar from "./Sidebar";

function App() {
  return (
    <div className='container-fluid  custom-bg min-vh-100'>
      <div className='row '>
        <div className='col-2 min-vh-100 sidebarColor-bg'>
          <Sidebar />
        </div>
        <div className="col-auto">

        </div>
      </div>

    </div>
  );
}

export default App;
