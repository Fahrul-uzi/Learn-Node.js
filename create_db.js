//importing and Connecting to mysql
var mysql=require('mysql');
//i use xampp
var db=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"your_database_name"
});


//create your database
db.connect(function (err) {
	if (err) throw err;
  //sql function
	let sql = "CREATE DATABASE your_database_name";
	db.query(sql,function(err,result){
		if (err) throw err;
		console.log("your text err here");
	});
});
