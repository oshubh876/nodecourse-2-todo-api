//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoAp',(err,db)=>{
 if(err){
   return console.log('Unable to connect to mongodb server');
 }
 console.log('Connected to MongoDB server');

/*db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
  console.log(result);
});*/

/*db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
  console.log(result);
});*/

/*db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
  console.log(result);
})*/

db.collection('Users').deleteMany({name:'Shubhangi'}).then((result)=>{
  console.log(result);
});

 //db.close();
});
