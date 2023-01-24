const dbConnect=require('./mongodb');

const insert=async ()=>{
    const db=await dbConnect();
    const result=db.insertOne(
        {item:'Narzo 10', brand:'Realme', price:10000,category:'Mobile'}
    );
}
insert();