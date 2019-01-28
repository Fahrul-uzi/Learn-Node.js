//importing and connecting to mysql
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

	//updating data
	
	let sql=`UPDATE your_table_name
		     SET set_field='set_data'
		     WHERE your_id`;
    
    db.query(sql,function (err,result) {
    	if (err) throw err;

    	console.log("Data has updated : "+result.affectedRows);

    });

});
