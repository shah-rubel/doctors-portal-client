import React from 'react';
import SeriviceInfo from './SeriviceInfo';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';

const ServicesContainer = () => {
    const card1 = { title: 'Fluoride Treatment' };
    const card2 = { title: 'Cavity Filling' };
    const card3 = { title: 'Teeth Whitening' };
    return (
        <div className='mt-32'>
            <h3 className='text-center text-secondary text-xl font-bold'>OUR SERVICES</h3>
            <h1 className='text-center text-4xl mt-2'>Services We Provide</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center mt-16'>
                <SeriviceInfo card={card1} img={fluoride}></SeriviceInfo>
                <SeriviceInfo card={card2} img={cavity}></SeriviceInfo>
                <SeriviceInfo card={card3} img={whitening}></SeriviceInfo>

            </div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <img style={{width:'458px',height:'576px'}} src={treatment} class="max-w-sm rounded-lg shadow-2xl" alt='dental-img' />
                    <div className='ml-24 mr-40'>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesContainer;