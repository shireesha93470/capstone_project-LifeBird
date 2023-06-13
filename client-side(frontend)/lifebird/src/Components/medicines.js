import { useState } from "react";
import './medicines.css';
function Medicine(){
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
            <div className="medical-search">
                <input type="text" placeholder=""></input>
                <div className="medical-button">
                    <img src="/resources/search.avif"></img>
                </div>

            </div>
            <div className="main-section">

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
export default Medicine;