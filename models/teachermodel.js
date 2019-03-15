var mongoose = require('mongoose');

var teacherSchema = mongoose.Schema({
  tid: {
    type: Number,
    unique: true,
    required:true
  },
  tname: {
    type: String,
    required:true
  },
  tdpt: {
    type: String,
    required:true
  },
  tage: {
    type: Number,
    required:true
  },
  tsl: {
    type: String,
    required:true
  }
    
});



module.exports = mongoose.model('teacher', teacherSchema);
