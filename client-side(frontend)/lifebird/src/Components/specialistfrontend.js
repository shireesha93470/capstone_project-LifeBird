import {useState,useEffect} from 'react';
import './specialistfrontend.css';

 const Infodata=()=>{
     const [message, setMessage] = useState('');
    const[data,setData]=useState([]);
      
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=()=>{
        fetch("http://localhost:5003/data").then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res);
            console.log(res);
        })
    
    } 
    const button=()=>{
        fetch(`http://localhost:5003/search/${message}`).then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res);
            console.log(res);
        })

     }
     const handleChange = (event) => {
        setMessage(event.target.value);
    
    
       };
    return(<div>
            <div className='main-section'>
            <div className='navbar'>
               <img  className="logo"src="./resources/bird.jpeg"></img>
                <p className='home'>Home</p>
                <p className='Doctor'>PHC</p>
                <p className='lab'>Specilaist</p>
                <p className='medicine'>Labs</p>
                <p className='signup'>Signup</p>
            </div>
        <div className='display'>
                  {/* <div className='part'> */}
                    <div className='search-input'>
                    <input type="text" placeholder='Search Doctors' onChange={handleChange}
                    value={message}/>
                    <button className='search-button' onClick={button}>
                        <img src="/resources/search.avif" alt=""></img>
                    </button>
                    <div> 
                    
                         <select className='select'>
                        <h4>locations</h4>
                            <option>Banglore</option>
                            <option>Delhi</option>
                            <option>Tirupati</option>
                            <option>Madanapalli</option>
                            <option>Palamaner</option>
                            <option>Chittoor</option>
                        </select>
                        {/* <select className='select-part'>
                            <option>Cardiologist</option>
                            <option>Dermotologist</option>
                            <option>Gynecologist</option>
                            <option>Endocrinologist</option>
                            <option>Neurologist</option>
                            <option>orthologist</option>
                        </select> */}
     </div> 
                  </div> 
                
                </div>  
            
                <div className='small'>
                    <div className='special-sec'>
                    {
                        data?.map(({image,name,specialization,Experience,phone_number,location})=>
                        
                        <div className='doctor'>
                            <div className='card-part'>
                            <img  className="img"src={image} alt=""/>
                            </div>
                            <div className="text">
                                <p className='Name'>Name:{name}</p>
                                <p className='Name'>specialization:{specialization}</p>
                                <p className='Name'>Experience:{Experience}</p>
                                <p className='Name'>phone_number:{phone_number}</p>
                                {/* <p className='Name'>{location}</p> */}
                                
                             
                            </div>
                                {/* <button>Click Here</button> */}
                               
                                    <div >
                                        <button className='first-button'>Book Appointment</button>
                                    </div>
                                    {/* <div>
                                        <button className='sec-button' >view Profile</button>
                                    </div>
                                */}
                            
                    
                       </div>
                        
                        )
                    
                
                    }
                    </div>
        
                </div>
        </div>
        </div>
    )
}
export default  Infodata;