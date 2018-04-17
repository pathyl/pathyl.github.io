var mongoose = require('mongoose');
var Student = mongoose.model('Student');


var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
}

module.exports.studentCreate = function(req, res){
	//sendJsonResponse(res, 200, {"status" : "success", "student" : "created"});
	//console.log(req.body);
	var student = new Student({
		studentFirstName: req.body.studentfirstname,
		studentLastName: req.body.studentlastname,
		aftercare: req.body.aftercare,
		programID: req.body.programid,
		householdID: req.body.householdid,
		studentID: req.body.studentid,
		notes: req.body.notes,
		dateOfBirth: req.body.dateofbirth,
		parentFirstName: req.body.parentfirstname,
		parentLastName: req.body.parentlast,
		streetAddress: req.body.streetaddress,
		city: req.body.city,
		state: req.body.state,
		zip: req.body.zip,
		phone: req.body.phone,
		altphone: req.body.altphone,
		billingCycle: req.body.billingcycle
	}, function(err, location){
		if (err){
			sendJsonResponse(res, 400, err);
		}else {
			sendJsonResponse(res, 201, "it : success");
		}
	});
	//console.log(student);
	student.save().then(result => {
		console.log(result);
	}).catch(err => console.log(err));
};

module.exports.studentReadOne = function(req, res){
	sendJsonResponse(res, 200, {"status" : "success", "student" : "read"});
	/*Student.find({},function(err, docs){
		if(err){
			res.json(err);
		}else{

		}
	});
	/*Student.findById(req.params.studentID).exec(function(err, student){
			sendJsonResponse(res, 200, student);
		})*/
};
module.exports.studentUpdateOne = function(req, res){
	sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.studentDeleteOne = function(req, res){
	sendJsonResponse(res, 200, {"status" : "success"});
};
