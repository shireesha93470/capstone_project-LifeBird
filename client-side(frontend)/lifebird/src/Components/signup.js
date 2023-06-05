import react from 'react';
import './signup.css';
function Signup(){
    return(
        <div className="outer-line">
           <div class="box">
			<h1>Sign Up</h1>
			{/* <img src="fly.jpg"></img> */}
     	         <form>
                  <div class="input">
     	         		<input type="text" placeholder="Name" class="details" />
     	         	</div>

     	         	<div class="input">
     	         		<input type="text" placeholder="Username" class="details" />
     	         	</div>
                      <div class="input">
     	         		<input type="number" placeholder="Phonenumber" class="details" />
     	         	</div>
                      <div class="input">
     	         		<input type="text" placeholder="Email-Id" class="details" />
     	         	</div>
     	         	
     	         	<div class="input">
     	         		<input type="password" placeholder="password" class="details" />
     	         	</div>
     	         	
     	         	<div class="input center">
     	         		<input type="button" value="Signup" class="login" />
     	         	</div>
     	         </form>
     	         <p class="signup">Already a member? <a href="" class="white"> Login</a></p>
     	    </div> 
            
            
         
           

         
        </div>
    )
}
export default Signup;
