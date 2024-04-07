import React from 'react';
import Navbar from './Navbar'; 

function Home({Toggle}){
  return (
    <div>
        <Navbar Toggle = {Toggle}/>
        <div className='container-fluid'>
            <div className=' row g-3 my-2'>
                <div className='col-md-3'>
                    <div className='p-3 bg-shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <h3 className='fs-2'>
                            230
                        </h3>
                        <p className='fs-5'>Produktet</p>
                    </div>
                    <i className='bi bi-cart-plus p-3 fs-1'></i>
                </div>
            </div>
    
      </div>
    </div>
  );
}

export default Home;