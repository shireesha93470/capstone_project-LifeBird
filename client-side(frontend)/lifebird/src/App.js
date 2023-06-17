import logo from './logo.svg';
import './App.css';
  //  import Signup from './Components/signup';
  //  import Login from './Components/login';
  //  import Forget from './Components/forget';
     import Home from './Components/home';
    // import Doctors from './Components/doctors';
  //  import Labs from './Components/labs';
    //  import Payment from './Components/payment'
    //import Medicine from './Components/medicines';
  import { useState } from 'react';

function App() {
    
  return (
    <div className="App">
                   
                       {/* <Signup/>   */}
                      {/* <Login/>  */}
                      {/* <Forget/>      */}
                      <Home/>      
                        {/* <Doctors/>             */}
                       {/* <Labs/>          */}
                        {/* <Medicine/>    */}
                        <payment/>
    </div>
  );
}

export default App;
