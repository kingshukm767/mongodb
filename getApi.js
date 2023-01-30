const express=require('express');
const dbConnect=require('./mongodb');
const app=express();

app.get('/',async(req,res)=>{
    const conn=await dbConnect();
    const result=await conn.find().toArray();
    res.send(result);
})

app.listen(5000);