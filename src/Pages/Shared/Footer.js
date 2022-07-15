import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div style={{
            background:`url(${footer})`,
            backgroundSize:'contain'
        }} className='pt-16'>
            <footer className="footer p-10 text-dark  mx-24">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='' className="link link-hover">Emergency Checkup</Link>
                    <Link to='' className="link link-hover">Monthly Checkup</Link>
                    <Link to='' className="link link-hover">Weekly Checkup</Link>
                    <Link to='' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title uppercase">Oral Health</span>
                    <Link to='' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='' className="link link-hover">Cavity Filling</Link>
                    <Link to='' className="link link-hover">Teath Whitening</Link>

                </div>
                <div>
                    <span className="footer-title uppercase">Our Address</span>
                    <Link to='' className="link link-hover">New York - 101010 Hudson</Link>


                </div>
            </footer>
            <div className='text-center mt-36 mb-11'>
                <p>Copyright © {year} - All right reserved by Doctors Portal.</p>
            </div>
        </div>
    );
};

export default Footer;