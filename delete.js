const dbConnect=require('./mongodb');
const deleteData=async ()=>{
    const db=await dbConnect();
    const result=await db.deleteMany({item:'Narzo 10'});
    if(result.acknowledged==true && result.deletedCount>0){
        console.log('Data deleted Successfully');
    }else{
        console.log('Data not found');
    }
}
deleteData();