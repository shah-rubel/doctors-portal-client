import React from 'react';

const InfoCard = ({img,card,bgClass}) => {
    const {title} = card;
    return (
        <div style={{width:'450px',height:'190px'}} className={`card lg:card-side  shadow-xl p-5 text-white ${bgClass}`}>
            <figure><img src={img} alt="Album"/></figure>
            <div className="card-body -mt-2">
                <h2 className="card-title">{title}</h2>
                <p className='-mt-2'>Click the button to listen on Spotiwhy app.</p>
               
            </div>
        </div>
    );
};

export default InfoCard;