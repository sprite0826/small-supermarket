const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(function (req, res, next) {   
     res.header("Access-Control-Allow-Origin", "*");   
     res.header("Access-Control-Allow-Headers", "X-Requested-With");   
     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");  
     next();});

var cors = require('cors');
app.use(cors({   
         origin:['http://localhost:8080'],   
          methods:['GET','POST'],    
          alloweHeaders:['Conten-Type', 'Authorization']
        }));
  

app.get("/",(req,res) =>{
    res.send({msg:"server is works"});
});

const Users = require("./routes/Users");
app.use("/api/v1",Users);



app.listen(port,() =>{
    console.log("Server is running on port:" + port);
});