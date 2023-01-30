const express=require('express');
const dbConnect=require('./mongodb');
const app=express();
app.use(express.json());

app.post('/',async(req,res)=>{
    const data=await dbConnect();
    let result=await data.insertOne(req.body);
    //console.log(req.body);
    res.send(result);
})

app.listen(5000);