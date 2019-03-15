var express = require('express');
var router = express.Router();

var Index=require('../models/studentmodel'); /*conect with studentmodel.js*/
var Index1=require('../models/teachermodel'); /*conect with teachermodel.js*/


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/student', function(req, res, next) {
  res.render('student');
});

router.get('/stable',function(req,res,next){
	Index.find(function(err,results){
    	if (err) return console.error(err);
    	else{
    		res.render('stable',{info:results});
    	}
  	});
});



router.post('/student', function(req, res, next) {

var stdid = req.body.stdid;
var stdname = req.body.stdname;
var stddpt = req.body.stddpt;
var stdage = req.body.stdage;
var stdcn = req.body.stdcn;

console.log(stdid + " _" + stdname + "_" + stddpt + "_" + stdage + "_" + stdcn );
console.log("Login Sucessfully ");

var query={stdid:stdid};/*NEw pdate*/

Index.findOneAndUpdate(query,{
  $set:{
    stdname:stdname,
    stdid:stdid,
    stddpt:stddpt,
    stdage:stdage,
    stdcn,stdcn
  }
},{
  new:true,
  upsert:true
},function(err, doc){
  if (err) {
    console.log("Spmething Wrong!!!CANdy");
  }
});
  
  res.redirect('/stable');
});

//Teacher Data



router.get('/teacher', function(req, res, next) {
  res.render('teacher');
});

router.get('/ttable',function(req,res,next){
	Index1.find(function(err,results){
    	if (err) return console.error(err);
    	else{
    		res.render('ttable',{info:results});
    	}
  	});
});



router.post('/teacher', function(req, res, next) {

var tid = req.body.tid;
var tname = req.body.tname;
var tdpt = req.body.tdpt;
var tage = req.body.tage;
var tsl = req.body.tsl;

console.log(tid + " _" + tname + "_" + tdpt + "_" + tage + "_" + tsl );
console.log("Login Sucessfully ");

var query={tid:tid};/*NEw pdate*/

Index1.findOneAndUpdate(query,{
  $set:{
    tname:tname,
    tid:tid,
    tdpt:tdpt,
    tage:tage,
    tsl,tsl
  }
},{
  new:true,
  upsert:true
},function(err, doc){
  if (err) {
    console.log("Spmething Wrong!!!CANdy");
  }
});
  
  res.redirect('/ttable');
});


module.exports = router;
