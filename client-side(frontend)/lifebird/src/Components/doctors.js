import react, { useState } from 'react';
import './doctors.css';
function Doctors(){
    return(
    <div className='main'>
        <div className='navbar'>
            <h2 className='logo'>LifeBird</h2>
            <h2 className='home'>Home</h2>
            <h2 className='doctor'>Doctors</h2>
            <h2 className='lab'>Labs</h2>
            <h2 className='medicine'>Medicines</h2>
            <h2 className='signup'>Signup</h2> 
        </div>
        <div className='doctors-cards'>
            <div className='filter'>
                <button className='doctorname1'>Cardiologist</button>
                <button className='doctorname'>Dermatologist</button>
                <button className='doctorname'>Gastroenterologist</button>
                <button className='doctorname'>Neurologist</button>
                <button className='doctorname'>Orthopedic Surgeon</button>
                <button className='doctorname'>Pediatrician</button>
                <button className='doctorname'>Psychiatrist</button>
                <button className='doctorname'>Gynecologist</button>
                <button className='doctorname'>Oncologist</button>
                <button className='doctorname'>Ophthalmologist</button>
                <button className='doctorname'>Otolaryngologist</button>
                <button className='doctorname'>Pulmonologist</button>
                <button className='doctorname'>Urologist</button>
                <button className='doctorname'>Endocrinologist</button>
                <button className='doctorname'>Rheumatologist</button>
                
            </div>
            <div className='card-section'> 
                    <div className='searchbar'>
                        <input class="search"type="text" placeholder=''></input>
                        <button id='searchbutton1'><img className='search-logo' src="/resources/search.avif" alt=""></img></button>
                    </div>
                    <div className='layout-1'>
                        <div className='image1'><img className="img1"src="/resources/specialist.jpg" alt=""></img>
                            <h2 className='name'>Ankitha</h2>
                            <h3 className='job'>cardiologist</h3>
                            <div className='year'>
                                <h3 className='experience'>Experience:5years</h3>
                                <p className='stars'>⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                        <div className='image1'><img className="img1"src="/resources/specialist.jpg" alt=""></img>
                            <h2 className='name'>Ankitha</h2>
                            <h3 className='job'>cardiologist</h3>
                            <div className='year'>
                                <h3 className='experience'>Experience:5years</h3>
                                <p className='stars'>⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                        <div className='image1'><img className="img1"src="/resources/specialist.jpg" alt=""></img>
                            <h2 className='name'>Ankitha</h2>
                            <h3 className='job'>cardiologist</h3>
                            <div className='year'>
                                <h3 className='experience'>Experience:5years</h3>
                                <p className='stars'>⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                    </div>
                    <div className='layout-1'>
                    <div className='image1'><img className="img1"src="/resources/specialist.jpg" alt=""></img>
                            <h2 className='name'>Ankitha</h2>
                            <h3 className='job'>cardiologist</h3>
                            <div className='year'>
                                <h3 className='experience'>Experience:5years</h3>
                                <p className='stars'>⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                        <div className='image1'><img className="img1"src="/resources/specialist.jpg" alt=""></img>
                            <h2 className='name'>Ankitha</h2>
                            <h3 className='job'>cardiologist</h3>
                            <div className='year'>
                                <h3 className='experience'>Experience:5years</h3>
                                <p className='stars'>⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                        <div className='image1'><img className="img1"src="/resources/specialist.jpg" alt=""></img>
                            <h2 className='name'>Ankitha</h2>
                            <h3 className='job'>cardiologist</h3>
                            <div className='year'>
                                <h3 className='experience'>Experience:5years</h3>
                                <p className='stars'>⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>

                    </div>
                    <div className='layout-1'>
                    <div className='image1'><img className="img1"src="/resources/specialist.jpg" alt=""></img>
                            <h2 className='name'>Ankitha</h2>
                            <h3 className='job'>cardiologist</h3>
                            <div className='year'>
                                <h3 className='experience'>Experience:5years</h3>
                                <p className='stars'>⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                        <div className='image1'><img className="img1"src="/resources/specialist.jpg" alt=""></img>
                            <h2 className='name'>Ankitha</h2>
                            <h3 className='job'>cardiologist</h3>
                            <div className='year'>
                                <h3 className='experience'>Experience:5years</h3>
                                <p className='stars'>⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                        <div className='image1'><img className="img1"src="/resources/specialist.jpg" alt=""></img>
                            <h2 className='name'>Ankitha</h2>
                            <h3 className='job'>cardiologist</h3>
                            <div className='year'>
                                <h3 className='experience'>Experience:5years</h3>
                                <p className='stars'>⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>

                    </div>
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