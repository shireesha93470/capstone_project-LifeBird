import {useState,useEffect} from 'react';
import './diseasebackend.css';

 const Doctordata=()=>{
     const [message, setMessage] = useState('');
    const[data,setData]=useState([]);
      
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=()=>{
        fetch("http://localhost:5005/data").then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res);
            console.log(res);
        })
    
    } 
    const button=()=>{
        fetch(`http://localhost:5005/search/${message}`).then((res)=>{
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
            <div>
                
                </div>
                
                
                
                
                <div className='small'>
                    {
                        data?.map(({image,Name})=>
                        
                        <div className='doctor'>
                            
                                <p className='image'>
                                    <img  className="img"src={image} alt=""/>
                                </p>
                                <p className="text">
                                <h3 className='Name'>{Name}</h3>
                                </p>
                                <button>Click Here</button>
                                
                        </div>
                        
                        
                        )
                        
                    
                
                    }
                    <div className='Main'>
                        <div className='card'>
                            <img src="	https://hospital.narayanahealth.org/northsouth_assets/img/specialities/Cardiac.jpg"></img>
                            <div className='Text'>
                                    <h1 className='cardio'>Cardiology & Cardiac Surgery</h1>
                                    <p className='siri'>At siri Health, we have a team of highly qualified and experienced cardiologists, interventional cardiologists, and cardiac surgeons who provide comprehensive care for a wide range of cardiac conditions in adults & children.
                                    Treatment for Cardiac conditions offered at Narayana Health ranges from medication, treatment of underlying conditions, interventional procedures to both minimally invasive and open heart surgery. To provide comprehensive care to patients, the team works closely with allied departments at Narayana Health to ensure accurate diagnosis are reached and appropriate pre and post treatment care is provided.</p>
                            </div>
                        </div>  
                        <div className='card'>
                            <img src="https://hospital.narayanahealth.org/northsouth_assets/img/specialities/Gastro.jpg"></img>
                            <div className='Text'>
                            <h1 className='cardio'>Gastroenterology</h1>
                                <p className='siri'>The Department of Gastroenterology at siri Health is at the forefront of diagnosis and treatment of 
                                    gastro-intestinal diseases, which consists of a highly trained gastroenterologists team. We treat diseases
                                     concerning the upper digestive tract, stomach, liver, colon, intestinal problems and pancreas. At Narayana 
                                     Health, we follow a multidisciplinary approach for the care of patients and the department is supported by
                                      Surgical Gastroenterology, Medical Oncology, Radiology, Radiotherapy, Anaesthesiology and Intensive Care Specialists.</p>
                            </div>
                            </div>  
                            <div className='card'>
                            <img src="https://hospital.narayanahealth.org/northsouth_assets/img/specialities/turp.jpg"></img>
                            <div className='Text'>
                            <h1 className='cardio'>Transplants</h1>
                                <p className='siri'>SIRI Health offers one of the most comprehensive organ transplantation programs in India. The experience and expertise of our consultants along with integrated multidisciplinary team approach and excellent infrastructure tries to ensure superior outcomes
                                Our hospitals are well known for several multi-organ transplant procedures such as:
                                Heart Transplant - Adult | Paediatric
                                Kidney Transplant - Living Donor | Deceased Donor
                                Liver Transplant - Adult | Paediatric
                                Bone Marrow Transplant: Autologous | Allogenic | Hematopoietic</p>
                            </div>
                            </div>  
                    </div>
        
                </div>
        </div>
        </div>
    </div>)
}
export default  Doctordata;