const express = require("express");
const cors = require("cors");
const app = express();
const { Client } = require("pg");
const fs = require('fs');

const filePath = 'seeder.sql';

app.use(express.json());
app.use(cors());

const client = new Client({
	user: "postgres",
	host: "localhost",
	database: "campcom",
	password: "123456",
	port: 5432,
});
client.connect();



app.get("/intializeDatabase", (req, res) => {
	fs.readFile(filePath,'utf-8',function(err,data){
		if(err){
			console.error(err);
			return;
		}
		console.log(data);
		
		client.query(data);
	});

	res.status(200).send("This is the backend Data");
});

app.post("/userSignUp",(req,res)=>{
	const name = req.body.name,gender=req.body.gender,age=req.body.age,password=req.body.password;

	/*signup the user*/
	client.query(
		'insert into users(name,gender,age,password) values($1,$2,$3,$4)',[name,gender,age,password],(error,results) => {
			if(error){
				console.error(error);
				res.status(500).send("Error in signing up");
			}
			else{
				res.status(200).send('Sign Up done successfully');
			}
		});
});

app.get("/fetchUserCommunity",(req,res)=>{
	const userId = req.query.userId;
	/*fetch communities for a particular user*/
	client.query(
		'select * from communityUser where userId=$1',[userId],(error,results)=>{
			if (error) {
				console.error(error);
				res.status(500).send("Error fetching commuity for users");
			  } else {
				res.status(200).json(results.rows);
			  }
		});
});

app.get("/fetchPostsOfCommunity",(req,res)=>{
	const comId = req.query.comId;
	client.query('select * from posts where comId=$1',[comId],(error,results)=>{
		if (error) {
			console.error(error);
			res.status(500).send("Error fetching posts of a community");
		  } else {
			res.status(200).json(results.rows);
		  }
	});
});

app.listen(5000, () => {
	console.log("Server Started on port 5000");
});
