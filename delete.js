//importing and connecting to database
var mysql=require('mysql');

//i use xampp
var db=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"your_database_name"
});

db.connect(function (err) {
	if (err) throw err;

	//deleting data with sql function
	let sql=`DELETE FROM your_table_name WHERE your_id`;
	db.query(sql,function (err,result) {
		if (err) throw err;
		console.log("Your "+result.affectedRows+" text result");
	})
})
