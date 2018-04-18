/*Get home page*/

/*Get home page*/
module.exports.homepage = function(req,res){
	res.render('index', { title: 'Home'});
};
/*GET register page*/
module.exports.registerstudent = function(req,res){
	res.render('registerstudent', { title: 'Register Student'});
};
module.exports.registerhousehold = function(req, res){
	res.render('registerhousehold', { title: "Register Household"});
}