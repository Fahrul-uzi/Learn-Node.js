//importing and connecting to database
var mysql=require('mysql');

//i use xampp
var db=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"your_database_name"
});


//create new data to databases
db.connect(function(err){
	if (err) throw err;


	//insert multidimension data 
	let sql ="INSERT INTO your_table_name (your_field_table) VALUES ?";
	var values =[
		['insert_data_here' ,'insert_data_here'],
		
	];
    //execute the sql function
    db.query(sql,[values],function(err,result){
    	if (err) throw err;
    	console.log("data has been created");
    	console.log("\ndata had listed : "+result.affectedRows);
    });
});
