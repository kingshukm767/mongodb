const dbConnect=require('./mongodb');
// const {MongoClient} = require('mongodb')
// const url='mongodb://localhost:27017';
// const dbName='e-comm'
// const client=new MongoClient(url);

// async function getData(){
//     let result=await client.connect();
//     let db=result.db(dbName);
//     let collection=db.collection('products');
//     let response=await collection.find({}).toArray();
//     console.log(response);
// }
// getData();

let main=async ()=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    console.log(data);

}


main();