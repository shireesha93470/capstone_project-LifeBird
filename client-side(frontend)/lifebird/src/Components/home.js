import react from 'react';
import './home.css';
function Home(){
    return(
<div className='main'>
    <div className="photo">
        <div className='navbar'>
            <h2 className='logo'>LifeBird</h2>
            <h2 className='home'>Home</h2>
            <h2 className='doctor'>Doctors</h2>
            <h2 className='lab'>Labs</h2>
            <h2 className='medicine'>Medicines</h2>
            <h2 className='signup'>Signup</h2> 
        </div>
        <div className="text">
            <p>Bringing health <br></br>to life for the whole family  </p>
        </div> 
            <button className='button'>Discover More</button>  
    </div>
    <div className='card'>
            <div className='left'>
                <div className='img'>
                    <img src="card1.jpg">
                    </img>
                    <h3>Education and Training:</h3>
                        <p>Doctors typically complete an undergraduate degree in a science-related field before attending medical school. However, some medical schools accept students with non-science degrees as well.
                        Medical school usually lasts four years and leads to the award of a Doctor of Medicine (M.D.) or Doctor of Osteopathic Medicine (D.O.) degree.
                        After graduating from medical school, doctors undertake a residency program, which provides hands-on training and specialization in a particular area of medicine. Residencies can last from three to seven years, depending on the specialty.
                        Following residency, doctors may choose to pursue additional training through fellowships to further specialize in a specific subspecialty or field of medicine.</p>
                        <button id="learn">Learn More</button>
                </div>

            </div>
                <div className='right'>
                    <div className='img'>
                        <img src="card2.jpg"></img>
                            <h3>Specialist doctors</h3>
                            <p>Specialist doctors, also known as medical specialists, are highly trained physicians who have pursued additional education and training in a specific area of medicine beyond their general medical education. These doctors have acquired in-depth knowledge and expertise in their chosen field, enabling them to provide specialized care to patients with specific medical conditions.
                             Specialist doctors begin their journey by completing an undergraduate degree and attending medical school, just like general doctors. However, their training goes beyond this point. After medical school, they undertake a residency program, which typically lasts several years, focusing on their specialty of choice.</p>
                             <button id="learn">Learn More</button>
                    
                     </div>
                </div>

            </div>
            <div className='video-layout'>
                <video className='video' controls>
                <source src={"doctor.mp4"} type="video/mp4"></source>
                </video>
            </div>
            <div id="smallcards">
                <div><img class="card3"
                    src="images1.jpeg"></img>
                </div>
                <div><img class="card3"
                    src="images2.jpeg"></img>
                </div>
                <div><img class="card3"
                    src="images3.jpeg"></img>
                </div>
                <div><img class="card3"
                     src="images4.jpeg"></img>
                </div>
         </div>
    </div>




    




    )
}
export default Home;