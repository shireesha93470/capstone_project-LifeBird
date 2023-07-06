import { useState } from "react";
import './signup.css';
import { Link } from "react-router-dom";
function Signup({islogin,setIslogin}){

	const[Name,setName]=useState("");
	const[Username,setUsername]=useState("");
	const[Phonenumber,setPhonenumber]=useState("");
	const[Email,setEmail]=useState("");
	const[password,setpassword]=useState("");
	function button(){
		let signupdetails=JSON.parse(localStorage.getItem("signup"))||[];
		if(Name!== "" && Username !== "" &&Phonenumber!==""&& Email !== "" && password !== ""){
			for(let i=0;i<signupdetails.length;i++){
				if(signupdetails[i].Email==Email){
					alert("already have an account please login")
					return;
				}
			}
			localStorage.setItem("signup",JSON.stringify([...signupdetails,{Name,Username,Phonenumber,Email,password}]));
			alert("created account successfully");
	} 
	else{
			alert("Enter your details")
		}
	}
	const handleSignupClick=()=>{
		setIslogin(true);
	}
    return(
	<div className="body">
       	<div className="outer-line">
           	<div className="Main">
				<h1 className="top-section">Sign Up</h1>
				<form>
                  <div className="texboxes">
     	         		<input type="text" placeholder="Name" onChange={e=> setName(e.target.value)} className="details" />
     	          </div>
				  <div className="texboxes">
     	         		<input type="text" placeholder="Username"onChange={e=> setUsername(e.target.value)} className="details" />
     	          </div>
                  <div className="texboxes">
     	         		<input type="number" placeholder="Phonenumber"onChange={e=> setPhonenumber(e.target.value)} className="details" />
     	          </div>
                  <div className="texboxes">
     	         		<input type="text" placeholder="Email" onChange={e=> setEmail(e.target.value)}className="details" />
     	          </div>
     	          <div className="texboxes">
     	         		<input type="password" placeholder="password"onChange={e=> setpassword(e.target.value)} className="details" />
     	          </div>
     	          <div className="input center">
						<Link to="/signup">
     	         			<input type="button" value="Signup"onClick={button} className="login" />

						</Link>
     	          </div>
     	        </form>
     	         	<p className="signup">Already a member? <span onClick={handleSignupClick}>Login</span></p>
     	    </div> 
        </div>    
            
    </div>
    )
}
export default Signup;


