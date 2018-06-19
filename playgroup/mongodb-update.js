//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoAp',(err,db)=>{
 if(err){
   return console.log('Unable to connect to mongodb server');
 }
 console.log('Connected to MongoDB server');

/*db.collection('Todos').findOneAndUpdate({
  _id: new ObjectID('5b288f4991ccce1c94eaa4cb')
},{
  $set:{
    completed:true
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});*/

db.collection('Users').findOneAndUpdate({
  _id:new ObjectID('5b294b030dd938bfff69a1c9')
},{
  $set:{
    name:'Shubhangi'
  },
  $inc:{
    age:-4
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});
 //db.close();
});
