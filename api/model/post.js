const mongoose=require("mongoose");
const postSchema=new mongoose.Schema({
    index:{
        type:Number,
        default:"-5"
    } ,
    content:{
        type:String,
        required:"body is required",
        minlength:1,
        maxlength:120
    }
});
const Book=mongoose.model("Post",postSchema);//model.(collection name,collectionschema)

module.exports=Book;