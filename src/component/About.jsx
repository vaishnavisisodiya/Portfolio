import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './About.css';

const About = () => {

    return (
        <>
            <div className='center-vertical bg-dark mb-5' id="About">
                <div className='about-us-sectiont bg-light'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-lg-6 mb-lg-0'>
                                <div className='img-head'>
                                    <img src='./img/vaishnavi.jpg' alt='photo' height={500} style={{marginLeft:"15%"}} />
                                </div>
                            </div>
                            <div className='col-12 col-lg-6'>
                                <h2 className='text-head'>
                                     ABOUT ME
                                </h2>
                                <div className='break-small mb-2'></div>
                                <p className='text-para container-fluid text-dark'>I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience.I like to talk, I like to listen songs. I like to see the sunrise in the morning, I like to see the moonlight at night; I like to feel the music flowing on my face. I like to look at the clouds in the sky with a blank mind.</p>
                                <ul class="about-info mt-4 px-md-0 px-2">
                                    <li class="d-flex text-dark"><b>Name: </b> <span>Vaishnavi Sisodiya</span></li>
                                    <li class="d-flex text-dark"><b>Date of birth:</b> <span>February 11,2003</span></li>
                                    <li class="d-flex text-dark"><b>Address:</b> <span>Indore,Madhya Pradesh</span></li>
                                    <li class="d-flex text-dark"><b>Zip code:</b> <span>452005</span></li>
                                    <li class="d-flex text-dark"><b>Email:</b> <span>2023pgcsca034@nitjsr.ac.in</span></li>
                                    <li class="d-flex text-dark"><b>Phone: </b> <span>8319745828</span></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default About