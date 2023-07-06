// import logo from './logo.svg';
// import './App.css';
  import Signup from './Components/signup';
  //  import Login from './Components/login';
  //  import Forget from './Components/forget';
    //  import Home from './Components/home';
    //  import Doctors from './Components/doctors';
  //  import Labs from './Components/labs';
      // import Payment from './Components/payment'
    // import Medicine from './Components/medicines';
    // import Doctordata from './Components/backend';
  // import { useState } from 'react';
  // import PHC from './Components/phc';
  // import Diseasedata from "./Components/diseasebackend";
  // import Infodata from "./Components/specialistfrontend";
  // import Medicinedata from "./Components/medicinedata";
  import { Route,Router } from "react-router-dom";

function App() {
    
  return (
    <div className="App">
      <Router>
        <Route exact path="/" element={<Home/> }></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
      </Router>
                   
                       {/* <Signup/>   */}
                      {/* <Login/>  */}
                      {/* <Forget/>      */}
                      {/* <Home/>       */}
                        {/* <Doctors/>             */}
                       {/* <Labs/>          */}
                        {/* <Medicine/>    */}
                        {/* <Payment/> */}
                        {/* <Doctordata/> */}
                        {/* <PHC/> */}
                        {/* <Diseasedata/> */}
                       {/* <Infodata/>  */}
                       {/* <Medicinedata/> */}
    </div>
  );
}

export default App;
