const express= require("express");
const router=express.Router(); 

const postController=require("../controllers/post")
router.get("/",postController.getPost);
router.post("/post",postController.createPost);
router.post('/save', postController.insertData );
router.delete('/delete/:_id', postController.deleteData );
router.patch('/update/:_id',postController.updateData);

module.exports=router;