async function insertPHCdata(req,res){
    var getTableData = `SELECT *  FROM primarytable `;
    con.query(getTableData, function(err, result){
          if(err) throw err;
        // alert("Data added successfully!")
        res.status(200).send(result);
    })
}
async function searchPHCdata(req,res){
    var data=req.params.primarytable
    var getTableData = `select * from primarytable where Doctor_name="${data}"`;
    con.query(getTableData, function(err, result){
          if(err) throw err;
        // alert("Data added successfully!")
        res.status(200).send(result);
    })
}

async function diseases(req,res){
    var getTableData = `SELECT *  FROM logos `;
    con.query(getTableData, function(err, result){
          if(err) throw err;
        // alert("Data added successfully!")
        res.status(200).send(result);
    })
}
async function diseasedata(req,res) {
var data=req.params.doctors
var getTableData = `select * from logos where Name="${data}"`;
con.query(getTableData, function(err, result){
    if(err) throw err;
  // alert("Data added successfully!")
  res.status(200).send(result);
})
}

async function specialist(req,res) {
    var getTableData = `SELECT *  FROM doctors `;
    con.query(getTableData, function(err, result){
          if(err) throw err;
        // alert("Data added successfully!")
        res.status(200).send(result);
    })
}
async function specialistdata(req,res) {
var data=req.params.doctors
var getTableData = `select * from doctors where specialization="${data}"`;
con.query(getTableData, function(err, result){
    if(err) throw err;
  // alert("Data added successfully!")
  res.status(200).send(result);
})
}

module.export={insertPHCdata,searchPHCdata,diseases,diseasedata,specialist,specialistdata}