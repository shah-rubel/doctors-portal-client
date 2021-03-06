import React from 'react';

const TestimonialCard = ({ review }) => {
    const { name, description, img, location } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">

                <p>{description}</p>
                <div className='flex items-center mt-9'>
                    <div>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 mr-4 ">
                                <img src={img} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div>
                            <h2>{name}</h2>
                            <p>{location}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TestimonialCard;