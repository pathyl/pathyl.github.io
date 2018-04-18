var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/ctrl');
var mongoose = require('mongoose');

//students
//create a new student
router.post('/student', ctrl.studentCreate);
//get student by id
router.get('/student/:studentid', ctrl.studentReadOne);
//update student by id
router.put('/student/:studentid', ctrl.studentUpdateOne);
//delete student by id
router.delete('/student/:studentid', ctrl.studentDeleteOne);
//create a household
router.post('/household', ctrl.householdCreate);



module.exports = router;