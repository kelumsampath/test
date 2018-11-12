const express = require('express');
const router = express.Router();
const datamodelds = require('../../datamodels/user');
const tokenmodels = require('../../datamodels/token');
const jobmodel = require('../../datamodels/job')
const token = require('../../config/token');

module.exports = router;

router.get('/',(req,res)=>{
    res.send("Hello cleaner!");
  });


  router.post('/getalljobs',(req,res)=>{
 
    jobmodel.getalljobs((err,jobs)=>{
      if(err) {
        //console.log(err);
        res.send({state:false,msg:"Server error"});
      }else{   
      res.send({state:true,jobs:jobs});
      }
    }) 
   });


   router.post('/viewjob',(req,res)=>{
    //console.log(req.body.postid)
  
   jobmodel.viewjob(req.body.postid,(err,job)=>{
     if(err) {
       //console.log(err);
       res.send({state:false,msg:"Server error"});
     }else{   
     res.send({state:true,job:job});
     }
   }) 
  });

  router.post('/applyjob',token.verifytoken,(req,res)=>{
   // console.log(req.body.jobid);
   // console.log(req.user);
   const user = {
     uid:req.user.uid,
     jobid:req.user.jobid
   }
    jobmodel.applyforjob(user,(err,res)=>{
      if(err){
        res.send({state:false,msg:"Server error"}); 
      }else{
        res.send({state:true,msg:"successfully apply for the jobid "})
    }
  })
});