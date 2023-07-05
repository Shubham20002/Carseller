const express=require('express');
const port=8000;
const app=express();
const db=require('./config/mongoose');

//for convert data string to object
app.use(express.urlencoded({ extended: false }));
//routing all request with root directory towards routes folder
app.use('/',require('./routes'));



//server starting on port no:8000
app.listen(port,function(err){
    if(err){
        console.log('error while server starting');
    }
    console.log("server start on port no"+port);
});
