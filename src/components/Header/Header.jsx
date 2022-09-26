import React from 'react';

import './Header.css'

const Header = () => {
    return ( 
        <div className='header flex flex-col' id='header'> 
            {/* navbar */}
            <div className='container flex'>
                <div className='header-content'>
                    <h2 className='text-uppercase text-white op-07 fw-6 ls-2'>Web design, branding, graphic</h2>
                    <h1 className='text-white fw-6 header-title'>Hello, I'm <span className='text-brown'>Front-End Developer & Freelancer</span> living in Aichi, Japan</h1>
                    <div className='btn-groups flex'>
                        <button type="button" className='btn-item bg-brown fw-4 ls-2'>See Workd</button>
                        <button type="button" className='btn-item bg-dark fw-4 ls-2'>Contact Me</button>
                    </div>
                </div>
            </div>


        </div>
     );
}
 
export default Header;