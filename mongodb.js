const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
dbname='e-comm';
const client=new MongoClient(url);

async function getData(){
    let conn=await client.connect();
    let db=conn.db(dbname);
    let collection=db.collection('products');
    let result=await collection.find({item:"M-30S"}).toArray();
    console.log(result);
}

getData();