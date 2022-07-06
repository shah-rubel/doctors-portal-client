import React from 'react';

const SeriviceInfo = ({img,card}) => {
    const {title} = card;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body text-center">
                <h2 class="text-xl text-accent font-semibold text-center">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                
            </div>
        </div>
    );
};

export default SeriviceInfo;