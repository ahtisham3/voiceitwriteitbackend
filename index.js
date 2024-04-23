const express=require('express');
const app=express();
require('dotenv').config();
const port= 3000||process.env.PORT;
const bodyparser=require('body-parser');
const bodyParser = require('body-parser');
require('./db');

app.use(bodyParser.json());
//api test

app.use('/',(req,res)=>{
res.json('api runing');

});

// run sever 
app.listen(port,()=>{
 console.log(`server is runing on ${port}`);

});
