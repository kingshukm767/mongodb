const express=require('express');
const dbConnect=require('./mongodb');
const app=express();
app.use(express.json());

app.put('/:item',async (req,res)=>{ //app.put('/',async (req,res)=>{ //simple path for upload using body
    let data=await dbConnect();
    let result=await data.updateOne(
       // {brand:req.body.brand},{$set:req.body} //data update using body
       {item:req.params.item},{$set:req.body} //data update using URL
        )
    console.log(req.body);
    res.send(result);

})
app.listen(5000);