import React from 'react';
import './labs.css';
function Labs(){
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
            <div className='second-section'>
                <img src=""></img>
                
            </div>
            <div  className='first-lab'>
                <video className='baby-video' controls>
                    <source src={"baby.mp4"} type="video/mp4"></source>
                </video>
                <div className='first-text'>
                        <h1>prenatal ultrasound: </h1>
                        <p class="lab1details">Baby scanning in the mother's stomach, also known as prenatal ultrasound 
                        or fetal ultrasound, is a non-invasive imaging technique used to visualize and monitor the developing 
                        baby during pregnancy Prenatal ultrasound plays a crucial role in obstetrics by providing valuable 
                        information about the growth, development, and well-being of the fetus. It uses high-frequency sound
                        waves to create real-time images of the baby, the uterus, and surrounding structures. The procedure 
                        is typically performed by a skilled ultrasound technologist or a specialized doctor known as a maternal-fetal
                        medicine specialist.Confirming Pregnancy: Ultrasound can confirm the presence of a viable pregnancy, the
                        number of fetuses, and the estimated gestational age. It helps determine the expected due date and establishes 
                        a baseline for monitoring the baby's growth.
                        Assessing Fetal Growth and Development: Regular ultrasound examinations during pregnancy can monitor the baby's 
                        growth, evaluate organ development, and detect any potential abnormalities. Measurements such as head circumference,
                        abdominal circumference, and femur length are taken to assess the baby's size and developmental milestones.Baby 
                        scanning allows healthcare providersto assess the baby's well-being by examining fetal movements.</p>
                        <button className="learn">Learn More</button>   
                </div>
            </div>
            <div className='second-lab'>
                <div className='second-text'>
                    <h1>Magnetic Resonance Imaging </h1>
                    <p className='lab2details'>Magnetic Resonance Imaging (MRI) is a non-invasive medical imaging technique that uses
                     a powerful magnetic field and radio waves to generate detailed images of the body's internal 
                     structures. Here are full details about MRI in 10 lines:
                     Principle: MRI relies on the interaction between the body's hydrogen atoms and the magnetic field.
                     When the body is placed in the magnetic field, the hydrogen atoms align with the field. Radio waves are then 
                     applied, causing the atoms to emit signals that are detected by the MRI machine.
                     Image Quality: MRI provides high-resolution images that offer excellent soft tissue contrast, making it 
                     particularly useful for visualizing the brain, spinal cord, joints, and internal organs.
                     Equipment: MRI machines consist of a large, cylindrical magnet, a radiofrequency coil, and a computer system 
                     that processes the acquired signals and generates images.
                     Safety: MRI is generally considered safe, as it does not use ionizing radiation. However, certain precautions
                     are necessary, such as removing metallic objects from the scanning area, as the strong magnetic field can interfere 
                     with or be attracted to ferromagnetic objects.Various types of MRI scans exist, including T1-weighted, T2-weighted, 
                     and proton density images.
                    </p>
                     <button className="learn1">Learn More</button> 
                </div>
                    <div className="second-video">
                        <video className='mri-video' controls>
                        <source src={"mri.mp4"} type="video/mp4"></source>
                        </video>
                    </div>
            </div>  
                <div className='card-section'>
                    <div className='small-card-section'>
                            <div className='small-card1'>
                                <img className='labs' src="/resources/bloodtest.avif"></img>
                                <h2></h2>
                            </div>
                            <div className='small-card'>
                                <img className='labs' src="/resources/test2.avif"></img>
                                <h1></h1>
                            </div>
                            <div className='small-card'>
                                <img className='labs' src="/resources/test3.avif"></img>
                                <h1></h1>
                            </div>
                            <div className='small-card'>
                                <img className='labs' src="/resources/test4.avif"></img>
                                <h1></h1>
                            </div>
                            <div className='small-card'>
                                <img className='labs' src="/resources/test5.avif"></img>
                                <h1></h1>
                            </div>
                    </div>
                    <div className='small-card-section'>
                            <div className='small-card1'>
                                <img className='labs' src="/resources/test6.avif"></img>
                                <h1></h1>
                            </div>
                            <div className='small-card'>
                                <img className='labs' src="/resources/test7.avif"></img>
                                <h1></h1>
                            </div>
                            <div className='small-card'>
                                <img className='labs' src="/resources/test8.avif"></img>
                                <h1></h1>
                            </div>
                            <div className='small-card'>
                                <img className='labs' src="/resources/test9.avif"></img>
                                <h1></h1>
                            </div>
                            <div className='small-card'>
                                <img className='labs' src="/resources/test10.avif"></img>
                                <h1></h1>
                            </div>
                    </div>
                </div>
                <div className='footer'>
                <div className='location'>
                    <h1 className='h1'>LOCATION</h1>
                    <p className='p'>somewhere in India</p>
                </div>
                <div className='logos'>
                     <h1 className='h1'>AROUND THE WEB</h1>
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
                     <h1 className='h1'>ABOUT US</h1>
                     <p className='p'>Connecting patients with trusted doctors online for<br></br> accessible and convenient healthcare.</p>
                </div>
                        
            </div>
        
        </div>

    )
}
export default Labs;