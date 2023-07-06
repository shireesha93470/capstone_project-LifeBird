import {useState,useEffect} from 'react';
import './medicinedata.css';

const Medicinedata=()=>{
    const [message, setMessage] = useState('');
    const[data,setData]=useState([]);
      
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=()=>{
        fetch("http://localhost:5300/medicinedata").then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res);
            console.log(res);
        })
    }
    const button=()=>{
        fetch(`http://localhost:5300/searchmedicine/${message}`).then((res)=>{
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
                {/* <h4 className='clear' onClick={fetchData}>clear</h4> */}
            </button>
        </div>
        <div className='display'>
        {
            data?.map(({image,medicine_id,medicine_name,price,mfd,epd,category})=>
            <div className='doctor'>
                <div className='main'>
                    <div className='image'>
                        <img  className="img"src={image} alt=""/>
                    </div>
                    <div className="text">
                    {/* <p className='id'>medicine_id:{medicine_id}</p> */}
                    <p className='category'>{category}</p>
                    <p className='Name'>{medicine_name}</p>
                    <div className='rating'>
                        <img src="https://im.indiatimes.in/content/2020/Jul/indian-currency-389006_1920_5f1547587ee6e.jpg"></img>
                    <p className='phone'>{price}</p>
                    </div>
                    {/* <p className='exp'>{mfd}</p>  */}
                    {/* <p className='address'>{epd}</p> */}
                    <button>Add To Cart</button>
                    
                    </div>
                </div>    
            </div> 
            
               
            )
        }
        </div>
        </div>
    </div>)
}
export default  Medicinedata;