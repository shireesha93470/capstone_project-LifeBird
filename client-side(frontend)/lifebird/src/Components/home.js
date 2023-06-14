import { useState } from "react";
import './home.css';
function Home(){
    return(
<div className='main'>
    <div className="photo">
        <div className='navbar'>
            <p className='logo'>LifeBird</p>
            <p className='home'>Home</p>
            <p className='doctor'>Doctors</p>
            <p className='lab'>Labs</p>
            <p className='medicine'>Medicines</p>
            <p className='signup'>Signup</p> 
        </div>
        <div className="text">
            <p>Bringing health <br></br>to life for the whole family  </p>
        </div> 
            <button className='button'>Discover More</button>  
    </div>
    <p>Our Departments</p>
    <div className='card'>
        <div className="small-part">
            <div className="small-symbol">
                <img src="/resources/card1.png"></img>
                <p>A cardiologist is a medical specialist who focuses on diagnosing and treating diseases.</p>
            </div>
            <div className="small-symbol">
                <img src=""></img>
                <p>Our mission is to improve quality of life through the enhancement of vision...</p>
            </div>
            <div className="small-symbol">
                <img src=""></img>
                <p></p>
            </div>
            <div className="small-symbol"></div>
        </div>
        <div className="small-part">
            <div className="small-symbol"></div>
            <div className="small-symbol"></div>
            <div className="small-symbol"></div>
            <div className="small-symbol"></div>
        </div>
    </div>

    
            

            
            <div className='video-layout'>
                <video className='video' controls>
                <source src={"doctor.mp4"} type="video/mp4"></source>
                </video>
            </div>
            <div id="smallcards">
                <div><img class="card3"
                    src="/resources/image1.avif"></img>
                </div>
                <div><img class="card3"
                    src="/resources/image2.avif"></img>
                </div>
                <div><img class="card3"
                    src="/resources/image3.avif"></img>
                </div>
                <div><img class="card3"
                     src="/resources/image4.avif"></img>
                </div>
         </div>
         <div className='footer'>
                <div className='location'>
                    <h1 className="h1">LOCATION</h1>
                    <p className="p">somewhere in India</p>
                </div>
                <div className='logos'>
                     <h1 className="h1">AROUND THE WEB</h1>
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
                     <h1 className="h1">ABOUT US</h1>
                     <p className="p">Connecting patients with trusted doctors online for<br></br> accessible and convenient healthcare.</p>
                </div>
                        
            </div>
    </div>
    )
}
export default Home;