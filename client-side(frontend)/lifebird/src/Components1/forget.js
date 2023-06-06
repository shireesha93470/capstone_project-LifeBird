import react, { useState } from 'react';
import './forget.css';
function Forget(){
	const[Username,setUsername]=useState("");
	const[Newpassword,setNewpassword]=useState("");
	const[Confirmpassword,setConfirmpassword]=useState("");
	function buttonClick(){
		if(Username==""||Newpassword==""||Confirmpassword==""){
			alert("enter details")
		}
		else{
			let forget=JSON.parse(localStorage.getItem("signup"))||[];
			let item=false;
			if(Newpassword==Confirmpassword){
				let arr=[];
				for(let i=0;i<forget.length;i++){
					if(forget[i].user===Username){
						item=true;
						if(forget[i].user!==Username){
							let obj={
								...forget[i],
								password:Newpassword
							}
							arr.push(obj)
						}
						else{
							alert("new and old password are same");
							return
						}
					}
					else{
						arr.push(forget[i])
					}
				}
				alert("password are not same");
				localStorage.setItem("signup",JSON.stringify(arr));
			}
			if(!item)
			alert("user doesn't exit");
		}
	}
return(
<div className="body">
    <div className="out-line">
           <div class="Main">
			<h1 id="head1">Forget Page</h1>
		</div>
	    <form>
            <div class="input1">
     	        <input type="text" placeholder="Username"onChange={e=> setUsername(e.target.value)} class="details1" />
     	    </div>
     	    <div class="input1">
     	        <input type="password" placeholder="Newpassword"onChange={e=> setNewpassword(e.target.value)} class="details1" />
     	    </div>
			<div class="input1">
     	        <input type="password" placeholder=" Confirmpassword" onChange={e=> setConfirmpassword(e.target.value)}class="details1" />
     	    </div>
     	    <div class="input center">
     	        <input type="button" value="Create" onClick={buttonClick}class="login" />
     	    </div>
     	</form>
    </div> 
</div>     
    )
}
export default Forget;
