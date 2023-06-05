import react from 'react';
import './login.css';
function Login(){
    return(
        <div className="outer-line">
           <div class="box">
			<h1 id="head">Login</h1>
			<div class="logos">
				<div class="facebook">
					<img src="facebook.avif"></img>
				</div>
				<div class="insta">
					<img src="instagram.avif"></img>
				</div>
				<div class="twitter">
					<a href=""><img src="twitter.png"></img></a>
				</div>
			</div>
			
     	         <form>
                  <div class="input">
     	         		<input type="text" placeholder="Username" class="details" />
     	         	</div>
     	         	<div class="input">
     	         		<input type="password" placeholder="password" class="details" />
     	         	</div>
     	         	
     	         	<div class="input center">
     	         		<input type="button" value="Login" class="login" />
     	         	</div>
     	         </form>
     	            <p class="signup">Not a member? <a href="" class="white"> Signup</a></p>
     	    </div> 
            
            
         
           

         
        </div>
    )
}
export default Login;
