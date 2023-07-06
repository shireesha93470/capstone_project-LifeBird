const express = require('express');
const mysql = require('mysql');
const cors = require("cors");

// Create an instance of Express
const app = express();

app.use(cors(),express.json());
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "P@ssw0rd",
    database:'diseaselogo'
});

app.get("/doctors",async(req,res) =>{
        var getTableData = `SELECT *  FROM doctors `;
        con.query(getTableData, function(err, result){
              if(err) throw err;
            // alert("Data added successfully!")
            res.status(200).send(result);
        })
})
app.get("/searchdoctors/:doctors",async(req,res) =>{
  var data=req.params.doctors
  var getTableData = `select * from doctors where specialization="${data}"`;
  con.query(getTableData, function(err, result){
        if(err) throw err;
      // alert("Data added successfully!")
      res.status(200).send(result);
  })
})
const port = 5003;
app.listen(5003, () => {
    console.log(`Server running on port ${port}`);
  }); 
app.on('listening', function() {
    console.log('Express server started on port %s at %s', app.address().port, app.address().address);
});