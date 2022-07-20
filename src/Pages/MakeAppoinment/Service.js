import React from 'react';
import {Link} from 'react-router-dom';

const Service = ({service}) => {
    const {name}=service;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <Link to='#' class="text-xl text-center text-secondary">{name}</Link>
                
            </div>
        </div>
        
        </div>
    );
};

export default Service;