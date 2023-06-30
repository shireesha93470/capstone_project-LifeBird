import {useState,useEffect} from 'react';
import './backend.css';

const Doctordata=()=>{
    const [message, setMessage] = useState('');
    const[data,setData]=useState([]);
      
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=()=>{
        fetch("http://localhost:5500/data").then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res);
            console.log(res);
        })
    }
    const button=()=>{
        fetch(`http://localhost:5500/search/${message}`).then((res)=>{
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
        <div className='search-input'>
            <input type="text" placeholder='Search Doctors' onChange={handleChange}
        value={message}/>
            <button className='search-button'onClick={button}>
                <img src="/resources/search.avif" alt=""></img>
                <h4 className='clear' onClick={fetchData}>clear</h4>
            </button>
        </div>
        <div className='display'>
        {
            data?.map(({Doctor_id,Doctor_name,phone_number,Experience,Address,image})=>
            <div className='doctor'>
                <div className='main'>
                    <div className='image'>
                        <img  className="img"src={image} alt=""/>
                    </div>
                    <div className="text">
                    <p className='id'>Doctor_id:{Doctor_id}</p>
                    <p className='Name'>Doctor_Name:{Doctor_name}</p>
                    <p className='phone'>Phone_number:{phone_number}</p>
                    <p className='exp'>Experience:{Experience}</p> 
                    <p className='address'>Address:{Address}</p>
                    </div>
                </div>    
            </div> 
            
               
            )
        }
        </div>
        </div>
    </div>)
}
export default  Doctordata;