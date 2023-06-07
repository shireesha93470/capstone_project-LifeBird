import logo from './logo.svg';
import './App.css';
//  import Signup from './Components/signup';
//  import Login from './Components/login';
//  import Forget from './Components/forget';
 import Home from './Components/home';
import { useState } from 'react';

function App() {
    // const[islogin,seIslogin]=useState(false);
  return (
    <div className="App">
                  {/* <Signup />      */}
                  <Home/>           
                 {/* <Login/>                   */}
                {/* <Forget/>           */}
                {/* (islogin)?<Signup islogin={islogin} setIslogin={seIslogin}/>:<Login islogin={islogin} seIslogin={seIslogin}/>  */}
       
    </div>
  );
}

export default App;
