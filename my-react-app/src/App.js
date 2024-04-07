import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css'
import Sidebar from './Sidebar'; 
import Home from './Home'; 

function App() {
  const [toggle, setToggle] = useState(false);

  const Toggle = () => { 
    setToggle(!toggle);
  }

  return (
    <div className='container-fluid custom-bg min-vh-100'>
      <div className='row'>
        {toggle && <div className='col-2 min-vh-100 sidebarColor-bg position-fixed'>
            <Sidebar />
          </div>}
        {toggle && <div className="col-2"></div>}
        <div className="col">
          <Home Toggle={Toggle} />
        </div>
      </div>
    </div>
  );
}

export default App;

