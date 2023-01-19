const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
dbname='e-comm';
const client=new MongoClient(url);

async function dbConnect(){
    let conn=await client.connect();
    let db=conn.db(dbname);
   return db.collection('products');
}

// dbConnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.log(data);
//     })
// });
let main=async ()=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    console.log(data);

}


main();