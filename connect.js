//importing and connecting to databases
var mysql=require('mysql');


//i use xampp
var db=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"Your Database name"
});


//checking connected or not 
db.connect(function(err){
	if (err) throw err;
	console.log("Your Text Err Here !!!");
});

module.exports=db;
