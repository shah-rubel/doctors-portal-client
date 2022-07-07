import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const reviews=[
        {_id:1,
            name:'Winson Herry',
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people1,
            location:'California'
        },
        {_id:2,
            name:'Winson Herry',
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people2,
            location:'California'
        },
        {_id:3,
            name:'Winson Herry',
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people3,
            location:'California'
        }
        
    ]
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <div className='mt-24 ml-14'>
                        <h2 className='text-xl text-secondary font-bold mt-2.5'>Testimonial</h2>
                        <h2 className='text-4xl'>What Our Patients Says</h2>
                    </div>
                </div>
                <div className='mr-12 mt-20 w-24 lg:w-48'>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5  place-items-center mt-44'>
                    {
                        reviews.map(review=><TestimonialCard key={review._id} review={review}></TestimonialCard>)
                    }
            </div>
        </div>
    );
};

export default Testimonial;