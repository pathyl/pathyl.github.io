var express = require('express');
var router = express.Router();
var ctrlStudent = require('../controllers/student');
var mongoose = require('mongoose');

//students
//create a new student
router.post('/student', ctrlStudent.studentCreate);
//get student by id
router.get('/student/:studentid', ctrlStudent.studentReadOne);
//update student by id
router.put('/student/:studentid', ctrlStudent.studentUpdateOne);
//delete student by id
router.delete('/student/:studentid', ctrlStudent.studentDeleteOne);



module.exports = router;