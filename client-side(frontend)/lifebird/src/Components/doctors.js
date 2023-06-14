import react, { useState } from 'react';
import './doctors.css';
function Doctors(){
    return(
        <div className='main'>
            <div className='navbar'>
                <p className='logo'>LifeBird</p>
                <p className='home'>Home</p>
                <p className='doctor'>Doctors</p>
                <p className='lab'>Labs</p>
                <p className='medicine'>Medicines</p>
                <p className='signup'>Signup</p>
            </div>
            <div className='main-section'>
                    <div className='left-section'>
                        <h1 className='search'>Search </h1>
                        <div className='search-input'>
                            <input type="text" placeholder=''></input>
                            <div className='search-button'>
                                <img src="/resources/search.avif" alt=""></img>
                            </div>
                        </div>
                        <h1 className='search'>Country </h1>
                        <div className='search-input'>
                            <input type="text" placeholder=''></input>
                            <div className='search-button'>
                                <img src="/resources/search.avif" alt=""></img>
                            </div>
                        </div>
                        <h1 className='search'>District </h1>
                        <div className='search-input'>
                            <input type="text" placeholder=''></input>
                            <div className='search-button'>
                                <img src="/resources/search.avif" alt=""></img>
                            </div>
                        </div>
                        <h1 className='search'>Experience </h1>
                        <div className='search-input'>
                            <input type="text" placeholder=''></input>
                            <div className='search-button'>
                                <img src="/resources/search.avif" alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className='card-section'>
                            <div id='layout-1'>
                                <div className='small-card'>
                                    <img src="/resources/cardiology.avif"></img>
                                    <h3>cardialogist</h3>
                                </div>
                                <div className='small-card'>
                                    <img src="/resources/Dermatologist.avif"></img>
                                    <h3>Dermatologist</h3>
                                </div>
                                <div className='small-card'>
                                    <img src="/resources/endocrinologist.avif"></img>
                                    <h3>Endocrinologist</h3>
                                </div>
                                <div className='small-card'>
                                    <img src="/resources/Gastroenterologist.avif"></img>
                                    <h3>Gastroenterologist</h3>
                                </div>
                            </div>
                            <div id='layout-1'>
                                <div className='small-card'>
                                    <img src="/resources/Gynecologist.avif"></img>
                                    <h3>Gynecologist</h3>
                                </div>
                                <div className='small-card'>
                                    <img src="/resources/Neurologist.avif"></img>
                                    <h3>Neurologist</h3>
                                </div>
                                <div className='small-card'>
                                    <img src="/resources/oncologist.avif"></img>
                                    <h3>Oncologist</h3>
                                </div>
                                <div className='small-card'>
                                    <img src="/resources/opthamologist.avif"></img>
                                    <h3>opthamologist</h3>
                                </div>
                            </div>
                            <div id='layout-1'>
                                <div className='small-card'>
                                    <img src="/resources/Orthopedic Surgeon.avif"></img>
                                    <h3>Orthopedic Surgeon</h3>
                                </div>
                                <div className='small-card'>
                                    <img src="/resources/otolaryngologist.avif"></img>
                                    <h3>Otolaryngologist</h3>
                                </div>
                                <div className='small-card'>
                                    <img src="/resources/psychiatrist.avif"></img>
                                    <h3>psychiatrist</h3>
                                </div>
                                <div className='small-card'>
                                    <img src="/resources/Rheumatologist.avif"></img>
                                    <h3>Rheumatologist</h3>
                                </div>
                            </div>
                    </div>
            </div>
            <div className='doctor-card'>
               <div className='small-doctorcard'>
                <img src="resources/doctor1.avif"></img>
                <h3>Cardiologist</h3>
               </div>
               <div className='small-doctorcard'>
                <img src="resources/doctor2.avif"></img>
                <h3>Dermatologist</h3>
               </div>
               <div className='small-doctorcard'>
                <img src="resources/doctor3.avif"></img>
                <h3>oncologist</h3>
               </div>
               <div className='small-doctorcard'>
                <img src="/resources/doctor4.avif"></img>
                <h3>Neurologist</h3>
               </div>
               <div className='small-doctorcard'>
                <img src="resources/doctor5.avif"></img>
                <h3>Urologist</h3>
               </div>
            </div>
        
                <div className='footer'>
                    <div className='location'>
                        <h1>LOCATION</h1>
                        <p>somewhere in India</p>
                    </div>
                    <div className='logos'>
                        <h1>AROUND THE WEB</h1>
                        <div className='logo1'>
                            <div className="facebook">
                                <a href="https://www.facebook.com/"><img src="/resources/facebook.avif" alt=""></img></a>
                            </div>
                            <div className="insta">
                                <a href="https://www.instagram.com/"><img src="/resources/instagram.avif" alt=""></img></a>
                            </div>
                            <div className="twitter">
                                <a href="https://twitter.com/"><img src="/resources/twitter.png" alt=""></img></a>
                            </div>
                        </div>
                    </div>
                    <div className='about'>
                        <h1>ABOUT US</h1>
                        <p>Connecting patients with trusted doctors online for<br></br> accessible and convenient healthcare.</p>
                    </div>

                 </div>
                </div>
        
                
       

        
    )

    
}
export default Doctors;