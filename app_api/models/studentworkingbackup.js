var mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	studentFirstName: {type: String},
	studentLastName: {type: String},
	aftercare: {type: String},
	programID: {type: String},
	householdID: {type: Number},
	studentID: {type: String, "default": '0'},
	notes: {type: String},
	dateOfBirth: {type: Date },
	parentFirstName: {type: String},
	parentLastName: {type: String},
	streetAddress: {type: String},
	city: {type: String},
	state: {type: String},
	zip: {type: Number},
	phone: {type: String},
	altphone: {type: String},
	billingCycle: {type: String}

});

module.exports = mongoose.model('Student', studentSchema);;