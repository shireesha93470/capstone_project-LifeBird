import react, { useState } from 'react';
import './forget.css';
import Signup from './signup';
function Forget(){
	const[Username,setUsername]=useState("");
	const[Newpassword,setNewpassword]=useState("");
	const[Confirmpassword,setConfirmpassword]=useState("");
	function buttonClick(){
		if(Username==""||Newpassword==""||Confirmpassword=="")
		{
			alert("enter details");
			return;
		}
		else
		{
			let forget=JSON.parse(localStorage.getItem("signup"));
			if(Newpassword===Confirmpassword)
			{
				let arr=[];
				for(let i=0;i<forget.length;i++)
				{
					if(forget[i].password!=Newpassword)
					{
						let obj=
						{
							...forget[i],
							password:Newpassword
						}
						arr.push(obj);
					}
					else
					{
						alert("old and new passwods are same");
						return;
					}
				}
				console.log(arr);
				alert("passwords changed successfully");
				
				localStorage.setItem("signup",JSON.stringify(arr));
				return;
			}
			else
			{
				alert("passwords are not mached");
				return;
			}
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
