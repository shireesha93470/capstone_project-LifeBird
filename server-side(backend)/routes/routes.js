import {insertPHCdata,searchPHCdata,specialist,specialistdata,diseases,diseasedata} from "../controllers/controle.js"

app.get('/phcdata',insertPHCdata)
app.get('/searchphc',searchPHCdata)
    
app.get('/doctors',specialist)
app.get('/searchdoctors/:doctors',specialistdata)


app.get('/disease',diseases)
app.get('/searchdisease/:doctors',diseasedata)