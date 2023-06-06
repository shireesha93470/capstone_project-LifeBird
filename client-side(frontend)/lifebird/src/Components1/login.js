import { useState } from "react";
import react from 'react';
import './login.css';
function Login(){
	const[Username,setUsername]=useState("");
	const[password,setpassword]=useState("");
	function buttonclick(){
		if(Username==""||password==""){
			alert("fill the details");
		}
		else{
		let result=JSON.parse(localStorage.getItem("result"))||[];
		for(let i=0;i<result.length;i++){
		if(result[i].Email===Username&&result[i].password===password){
	    alert("Login successfully")
	
		localStorage.setItem("result",JSON.stringify(result[i]));
		}
		else{
			alert("user not exit");
		}
		
		}
   }
	}

    return(
		<div className="body">
       	 <div className="out-line">
        	 <div className="Main"> 
				<h1 id="head1">Login Page</h1>
			
			 </div>
			
     	        <form>
                  <div className="input1">
     	         		<input type="text" placeholder="Username" onChange={e=> setUsername(e.target.value)} className="details1" />
     	          </div>
     	          <div className="input1">
     	         		<input type="password" placeholder="password"  onChange={e=> setpassword(e.target.value)}className="details1" />
     	           </div>
     	           <div className="input center">
     	         		<input type="button" value="Login" onClick={buttonclick} className="login" />
     	           </div>
     	        </form>
     	            <p className="signup">Not a member? <a href="" className="white"> Signup</a></p>

			    <div className="logos">
				<div className="facebook">
					<a href="https://www.facebook.com/"><img src="facebook.avif"></img></a>
				</div>
				<div className="insta">
					<a href="https://www.instagram.com/"><img src="instagram.avif"></img></a>
				</div>
				<div className="twitter">
					<a href="https://twitter.com/"><img src="twitter.png"></img></a>
				</div>
			
     	    </div> 
            
          </div>    
         
           

         
        </div>
    )
}
export default Login;
