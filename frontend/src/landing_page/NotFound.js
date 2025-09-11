import React from 'react';
function NotFound() {
    return ( 
        <div className='container text-center' style={{marginTop:"100px", marginBottom:"100px"}}>
            <h1 className='display-1 fw-bold'>404</h1>
            <p className='fs-3'> <span className='text-danger'>Opps!</span> Page not found.</p>
            <p className='lead'>
                The page you are looking for does not exist.
            </p>
            <a href='/' className='btn btn-primary'>Go Home</a>
        </div>
     );
}

export default NotFound;