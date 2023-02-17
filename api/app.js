const express=require("express");
const bodyParser=require('body-parser');
const app=express();
const mongoose = require("mongoose"); 
const morgan=require("morgan");//middleware  
const  cors = require('cors')
app.use(cors());
app.use(morgan("dev")); 
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const postRoutes=require("./routes/post")
app.use("/",postRoutes);
// app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect('mongodb+srv://root:Root123@nodeapi.g1m0ezt.mongodb.net/?retryWrites=true&w=majority');
mongoose.Promise=global.Promise;
const db=mongoose.connection;
db.on("connected",()=>console.log("monguse connection established"));
db.on("err",()=>console.log("error occured")); 


const port=3000;
app.listen(port,()=>console.log("console"));

