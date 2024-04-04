import React from 'react'

function Sidebar(){
    return (
        <div className='bg-white'>
            <div>
                <i className='bi bi-bootstarap-fill my-2'></i>
                <span className='brand-name fs-4'>Readopia</span>
            </div>
            <hr className='text-dark'/>
            <div className='list-group list-group-flush'>
                <a className='list-group-item list-group-itemm-action my-2'>
                    <i className='bi bi-spedometer2'></i>
                    <span>Dashboard</span>
                </a>
                <a className='list-group-item list-group-itemm-action my-2'>
                    <i className='bi bi-house'></i>
                    <span>Home</span>
                </a>
            </div>

        </div>
    )
}

export default Sidebar