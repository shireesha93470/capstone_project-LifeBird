import react, { useState } from 'react';
import './phc.css';
import Doctordata from './backend';
function PHC (){
    return(
        <div className='main'>
            <div className='navbar'>
               <img  className="logo"src="./resources/bird.jpeg"></img>
                <p className='home'>Home</p>
                <p className='doctor'>PHC</p>
                <p className='lab'>Specilaist</p>
                <p className='medicine'>Labs</p>
                <p className='signup'>Signup</p>
            </div>
            <div className='search-input'>
                            <input type="text" placeholder='Search Doctors'></input>
                            <div className='search-button'>
                                <img src="/resources/search.avif" alt=""></img>
                            </div>
                        </div>
       
        <div className='part-1'>
            <div className='small-pic'>
                <div className='picture1'>
                    <img src="https://img.freepik.com/premium-photo/young-happy-indian-man-doctor-smiling_251136-50318.jpg?w=2000"></img>
                    <p>Doctor_id:1</p>
                    <p>Doctor_name:Ashoke</p>
                    <p>Experience:5 years</p>
                    <p>phone_number:9347028527</p>
                    <p>Address:chowdepalli,chittoor,pin-517257</p>
                </div>
                <div className='picture'>
                    <img src="https://img.freepik.com/premium-photo/young-happy-indian-man-doctor-smiling_251136-50318.jpg?w=2000"></img>
                    <p>Doctor_id:1</p>
                    <p>Doctor_name:Ashoke</p>
                    <p>Experience:5 years</p>
                    <p>phone_number:9347028527</p>
                    <p>Address:chowdepalli,chittoor,pin-517257</p>
                </div>
                <div className='picture'>
                    <img src="https://img.freepik.com/premium-photo/young-happy-indian-man-doctor-smiling_251136-50318.jpg?w=2000"></img>
                    <p>Doctor_id:1</p>
                    <p>Doctor_name:Ashoke</p>
                    <p>Experience:5 years</p>
                    <p>phone_number:9347028527</p>
                    <p>Address:chowdepalli,chittoor,pin-517257</p>
                </div>
                <div className='picture'>
                    <img src="https://img.freepik.com/premium-photo/young-happy-indian-man-doctor-smiling_251136-50318.jpg?w=2000"></img>
                    <p>Doctor_id:1</p>
                    <p>Doctor_name:Ashoke</p>
                    <p>Experience:5 years</p>
                    <p>phone_number:9347028527</p>
                    <p>Address:chowdepalli,chittoor,pin-517257</p>
                </div>
            </div>
            <div className='small-pic'>
                <div className='picture1'>
                    <img src="https://img.freepik.com/premium-photo/young-happy-indian-man-doctor-smiling_251136-50318.jpg?w=2000"></img>
                    <p>Doctor_id:1</p>
                    <p>Doctor_name:Ashoke</p>
                    <p>Experience:5 years</p>
                    <p>phone_number:9347028527</p>
                    <p>Address:chowdepalli,chittoor,pin-517257</p>
                </div>
                <div className='picture'>
                    <img src="https://img.freepik.com/premium-photo/young-happy-indian-man-doctor-smiling_251136-50318.jpg?w=2000"></img>
                    <p>Doctor_id:1</p>
                    <p>Doctor_name:Ashoke</p>
                    <p>Experience:5 years</p>
                    <p>phone_number:9347028527</p>
                    <p>Address:chowdepalli,chittoor,pin-517257</p>
                </div>
                <div className='picture'>
                    <img src="https://img.freepik.com/premium-photo/young-happy-indian-man-doctor-smiling_251136-50318.jpg?w=2000"></img>
                    <p>Doctor_id:1</p>
                    <p>Doctor_name:Ashoke</p>
                    <p>Experience:5 years</p>
                    <p>phone_number:9347028527</p>
                    <p>Address:chowdepalli,chittoor,pin-517257</p>
                </div>
                <div className='picture'>
                    <img src="https://img.freepik.com/premium-photo/young-happy-indian-man-doctor-smiling_251136-50318.jpg?w=2000"></img>
                    <p>Doctor_id:1</p>
                    <p>Doctor_name:Ashoke</p>
                    <p>Experience:5 years</p>
                    <p>phone_number:9347028527</p>
                    <p>Address:chowdepalli,chittoor,pin-517257</p>
                </div>
            </div>
            <div className='small-pic'>
                <div className='picture1'>
                    <img src="https://img.freepik.com/premium-photo/young-happy-indian-man-doctor-smiling_251136-50318.jpg?w=2000"></img>
                    <p>Doctor_id:1</p>
                    <p>Doctor_name:Ashoke</p>
                    <p>Experience:5 years</p>
                    <p>phone_number:9347028527</p>
                    <p>Address:chowdepalli,chittoor,pin-517257</p>
                </div>
                <div className='picture'>
                    <img src="https://img.freepik.com/premium-photo/young-happy-indian-man-doctor-smiling_251136-50318.jpg?w=2000"></img>
                    <p>Doctor_id:1</p>
                    <p>Doctor_name:Ashoke</p>
                    <p>Experience:5 years</p>
                    <p>phone_number:9347028527</p>
                    <p>Address:chowdepalli,chittoor,pin-517257</p>
                </div>
                <div className='picture'>
                    <img src="https://img.freepik.com/premium-photo/young-happy-indian-man-doctor-smiling_251136-50318.jpg?w=2000"></img>
                    <p>Doctor_id:1</p>
                    <p>Doctor_name:Ashoke</p>
                    <p>Experience:5 years</p>
                    <p>phone_number:9347028527</p>
                    <p>Address:chowdepalli,chittoor,pin-517257</p>
                </div>
                <div className='picture'>
                    <img src="https://img.freepik.com/premium-photo/young-happy-indian-man-doctor-smiling_251136-50318.jpg?w=2000"></img>
                    <p>Doctor_id:1</p>
                    <p>Doctor_name:Ashoke</p>
                    <p>Experience:5 years</p>
                    <p>phone_number:9347028527</p>
                    <p>Address:chowdepalli,chittoor,pin-517257</p>
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
export default PHC;
        
            
            