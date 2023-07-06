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
    database:'Primarydetails'
});

app.get("/phcdata",async(req,res) =>{
        var getTableData = `SELECT *  FROM primarytable `;
        con.query(getTableData, function(err, result){
              if(err) throw err;
            // alert("Data added successfully!")
            res.status(200).send(result);
        })
})
app.get("/searchphc/:primarytable",async(req,res) =>{
    var data=req.params.primarytable
    var getTableData = `select * from primarytable where Doctor_name="${data}"`;
    con.query(getTableData, function(err, result){
          if(err) throw err;
        // alert("Data added successfully!")
        res.status(200).send(result);
    })
})

const port = 5500;
app.listen(5500, () => {
    console.log(`Server running on port ${port}`);
  }); 
app.on('listening', function() {
    console.log('Express server started on port %s at %s', app.address().port, app.address().address);
});