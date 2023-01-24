const dbConnect=require('./mongodb');

const update=async ()=>{
    const db=await dbConnect();
    const result=await db.updateOne(
        {item:'A 50'},{$set:{price:26500}}
    );
    if(result.acknowledged==true && result.modifiedCount===1 && result.matchedCount===1){
        console.log('Data Updated Successfully');
    }
}
update();