import { format } from 'date-fns';
import React from 'react';

const BookAppoinment = ({ treatment, date,setTreatment }) => {
    const { name, slots, _id } = treatment;
    const handleSubmit = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id,name,slot);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">

                <div class="modal-box">
                    <label htmlFor="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-2 justify-items-center mt-4'>
                        <input type="text" readonly value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select  select-bordered w-full max-w-xs">
                            {slots.map(slot => <option  value={slot}>{slot}</option>)}

                        </select>
                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
                        <input type="tel" name='phone' placeholder="Your Phone" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Confirm Appoinment" class="btn btn-secondary text-white w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookAppoinment;