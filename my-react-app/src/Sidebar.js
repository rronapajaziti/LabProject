import React from 'react'


function Sidebar(){
    return (
        <div className='header'>
            <div className='m-2'>
                <i className='bi bi-bootstarap-fill me-2 fs-4'></i>
                <span className='brand-name fs-4'>Readopia</span>
            </div>
            <hr className='text-dark'/>
            <div className='list-group listgroup-flush'>
                <a className='list-group-item py-2'>
                    <i  id= 'dashboardname' className='bi bi-speedometer2 fs-5 me-2'></i>
                    <span>Dashboard</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className='bi bi-house fs-5 me-2'></i>
                    <span>Home</span>
                </a>
                <a className='list-group-item py-2'>
                    <i class="bi bi-person-badge fs-5 me-2"></i>
                    <span>Stafi</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className="bi bi-book fs-5 me-2"></i>
                    <span>Libra</span>
                </a>
                <a className='list-group-item py-2'>
                    <i class="bi bi-grid-1x2 fs-5 me-2"></i>
                    <span>Kategorite</span>
                </a>
                <a className='list-group-item py-2'>
                <i class="bi bi-bookmark-star-fill fs-5 me-2"></i>
                    <span>Aksesoret</span>
                </a>
            </div>

        </div>
    )
} 

export default Sidebar