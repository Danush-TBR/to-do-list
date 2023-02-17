const mongoose=require("mongoose");
const { db } = require('../model/post');
const Book = require('../model/post');
const Post=require('../model/post');
exports.getPost=(req,res) => {
        Book.find()
          .exec()
          .then(docs => {
            // console.log(docs[0]._id);
            res.send(docs);
            
            // res.status(200).json(docs);
            
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
          });
      }

exports.createPost=(req,res)=>{
    const post=new Post(req.body);
    console.log("Post created ",post);
    res.send("over")
    
} 

exports.insertData=(req,res)=>{ 
   console.log("hitted");
   var newRecord = new Book(
    {
    
    index : req.body.index,
    content : req.body.content
    });
   
   
   
   newRecord.save(function(err){
       if(err){
           console.log(err);
       }
       else{
           res.send("Data inserted");
       }
   });
}  
exports.updateData=(req, res, next) => {
   const t1=req.params._id;
   console.log(req.body);
   const updatedArr={};
   for(const field of Object.keys(req.body)){   //req.body contains all the keys in the json object or fields of schema field.value has value associated to field.
    
    updatedArr[field]=req.body[field];

   }
   Book.updateOne({_id:t1},{ $set: updatedArr})
   .exec()
   .then(result=>
    {console.log("updated");
    console.log(result);
    res.send("updated")})
    .catch(err => {
    console.log(err);
    res.status(500).json({
    error: err
    });
  });//{$set:{title:req.body.title,body:req.body.body}}
};
exports.deleteData=(req,res)=>{ 
    
    Book.deleteOne({ _id:req.params._id })
      .exec()
      .then(result => {
        console.log(req.params._id);
        console.log("deleted");
        res.send("deleted");
        
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
     
    }