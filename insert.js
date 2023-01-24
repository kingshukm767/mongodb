const dbConnect=require('./mongodb');

const insert=async ()=>{
    const db=await dbConnect();
    const result=await db.insertOne(
        {item:'A 30', brand:'Samsung', price:22000,category:'Mobile'}
    );
    if(result.acknowledged==true){
        console.log('Data Inserted successfully');
    }
}
insert();