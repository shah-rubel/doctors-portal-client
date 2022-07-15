import React from 'react';

const ServiceSlots = ({slot}) => {
    const{name,slots}=slot;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="text-xl text-center text-secondary">{name}</h2>
                {slots.length>0 ? <span className='text-center'>{slots[0]}</span> : <span className='text-red-500 text-center'>Please try another date.</span>}
                <p className='text-center'>{slots.length} {slots.length>1 ? <span>slots</span>:<span>slot</span>} available</p>
                <div class="card-actions justify-center">
                    <button disabled={slots.length===0} class="btn bg-gradient-to-r from-secondary to-primary text-white border-none">Book Appoinment</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceSlots;