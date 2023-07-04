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
            <div className="text1">
                <div className="card-section">
                    
                </div>
               
            </div>
            
        </div>
    </div>
    <div className="main-part">
    <h4 className="section-heading">Our Departments</h4>
    <div className='card'>
        <div className="small-part">
            <div className="small-symbol">
                <img src="/resources/Cardiology.png"></img>
                <p>​Our areas of expertise make the department a national cardiac referral centre...</p>
            </div>
            <div className="small-symbol">
                <img src="/resources/eye.png"></img>
                <p>Our mission is to improve quality of life through the enhancement of vision...</p>
            </div>
            <div className="small-symbol">
                <img src="/resources/Gastroenterology.png"></img>
                <p>With nationally and inter- nationally known experts in gastroenterology...</p>
            </div>
            <div className="small-symbol">
                <img src="/resources/Hematology.png"></img>
                <p>In the medical field, hemato- logy includes the treatment of blood...</p>
            </div>
        </div>
        <div className="small-part">
            <div className="small-symbol">
                <img src="/resources/Immunology.png"></img>
                <p>The immune system provides the defense for an organism to repel invasion...</p>
            </div>
            <div className="small-symbol">
                <img src="/resources/Orthopedics.png"></img>
                <p>We have a diverse team of clinicians, administrators, and researchers...</p>
            </div>
            <div className="small-symbol">
                <img src="/resources/Pulmonary.png"></img>
                <p>Medicol is one of the leading medical facilities in America for the diagnosis...</p>
            </div>
            <div className="small-symbol">
                <img src="/resources/Psychiatry.jpg"></img>
                <p>In its ongoing attempts to define, understand, and categorize disorders...</p>
            </div>
        </div>
    </div>  
</div>
    <div className='video-layout'>
        <video className='video' controls>
            <source src={"doctor.mp4"} type="video/mp4"></source>
        </video>
    </div>
    <div id="smallcards">
         <h3>Steps To Be Taken:</h3> 
         <div className="section-1">
        <img className="patient" src="/resources/patient.webp"></img>
        <img  className="arrow"src="/resources/arrow.png"></img>
        <img  className="phc"src="/resources/Primary Health Care.png"></img>
        <img  className="arrow" src="/resources/arrow.png"></img>
        <img  className="specialist" src="/resources/specialist.webp"></img>
        <img  className="arrow" src="/resources/arrow.png"></img>
        <img  className="labs" src="/resources/labs.png"></img>
        </div>
    </div>
    <div id="smallcards1">
         <h3>Most common symptoms:</h3> 
         <div className="sec-1">
            <div className="sec1">
                <img src="/resources/1.png"></img> 
                <p>Fever</p>
            </div>
            
            <div className="sec">
                <img src="/resources/2chestpain.png"></img>
                <p>Chest pain</p>
            </div> 
            <div className="sec">
                <img src="/resources/3cough.png"></img> 
                <p>cough&cold</p>
            </div>
            <div className="sec">
                <img src="/resources/4constipation.png"></img> 
                <p>constipation</p>
            </div>
            <div className="sec">
                <img src="/resources/5sorethroat.png"></img> 
                <p>sorethroat</p>
            </div>
        </div>
        <div className="section-2">
        <div className="sec1">
                <img src="/resources/6infertility.png"></img> 
                <p>Infertility</p>
            </div>
            <div className="sec">
                <img src="/resources/7irregular periods.png"></img>
                <p>Irregular periods</p>
            </div> 
            <div className="sec">
                <img src="/resources/8headache.png"></img> 
                <p>Head ache</p>
            </div>
            <div className="sec">
                <img src="/resources/9abdominalpain.png"></img> 
                <p>Abdominal pain</p>
            </div>
            <div className="sec">
                <img src="/resources/10itching.png"></img> 
                <p>Itching</p>
            </div>
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