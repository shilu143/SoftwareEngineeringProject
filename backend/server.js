const express = require("express");
const cors = require("cors");
const app = express();
const { Client } = require("pg");
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const axios = require('axios');
const jwt = require('jsonwebtoken');

const jwtkey = 'college_reddit'; /*key for jwt*/

const filePath = 'seeder.sql';

app.use(express.json());
app.use(cors());

function verifyToken(req,res,next){
	let token_from_frontend = req.headers.authorization;
	// const decoded = jwt.decode(token,{complete:true});
	// const userEmailId = decoded.payload.userId;
	// console.log("Email sent="+userEmailId);
	if(token_from_frontend){
		// token = token_from_frontend.split(' ')[1]
		jwt.verify(token_from_frontend,jwtkey,(error,valid)=>{
			if(error){				
				res.send("Please send correct token");			
			}
			else{
				console.log("Valid:"+valid.email);
				req.userEmail = valid.email;
				next();
				// res.send("Authorized token!");
			}
		});
	}
	else{
		res.send({result:"Please add token with header"});
	}
	// console.log(token_from_frontend)
	console.warn("Middleware called!"+token);
	
}

const client = new Client({
	user: "postgres",
	host: "localhost",
	database: "campcom",
	password: "123456",
	port: 5432,
});
client.connect();

/*login api*/
app.post("/loginCheck",verifyToken,async (req,res)=>{
	const email=req.body.email,password = req.body.password;
	console.log(req.body);
	var query = `select count(*) from users where email='${email}' and password='${password}'`;
	console.log(query);
	client.query(query,(error,results)=>{
		if (error) {
			console.error(error);
			res.status(500).send("Error! Try again");
		} else {
			const ct = results.rows[0].count;
			console.log(results.rows[0].count);
			if(ct == 1){
				jwt.sign({"email":email},jwtkey,{expiresIn:"24h"},(err,token)=>{
					if(err){
						res.status(404,{result:"Session Timeout"})
					}
					else{
						res.send({userEmail:email,auth:token});
					}					
				});
			}else{
				res.status(200).json("Invalid user name or password");
			}
		}		
	});
});

/*storage engine*/
const storage = multer.diskStorage({
	destination:'./upload/images',
	filename: /*unique filename for each user*/ (req,file,cb)=>{
		/*use file since already we are getting the file object here*/
		cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
	},
});

/*to upload the files*/
const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 5, // 5 MB
		files: 1
	},
	fileFilter: (req, file, cb) => {
		if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
		  cb(null, true);
		} else {

			return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
		}
	  }
});

/*send the response back to the url, so the user can use it*/
/*images folder will serve the static content*/
app.use("/profile",express.static('upload/images'));



/*.single=only single files with a particular name should be uploaded in the request*/

app.get("/initializeDatabase", (req, res) => {
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

app.post("/testImgUpload",upload.single('profile'),async(req,res)=>{
	console.log(req.file);
	res.json({
		success: 1,
		profile_img_url : `http://localhost:5000/profile/${req.file.filename}`,
	}) ;
});

app.post("/userSignUp",upload.single('profile'),async (req,res)=>{
	console.log(req.body)
	const name = req.body.name,gender=req.body.gender,age=req.body.age,password=req.body.password,email=req.body.email;

	const profile_img_url = `http://localhost:5000/profile/${req.file.filename}`;
	console.log("Age "+age);

	/*signup the user*/
	client.query(
		'insert into users(email,name,gender,age,password,profileImage) values($1,$2,$3,$4,$5,$6)',[email,name,gender,age,password,profile_img_url],(error,results) => {
			if(error){
				console.error(error);
				res.status(500).send("Error in signing up");
			}
			else{
				res.status(200).send('Sign Up done successfully');
			}
		});
});

app.get("/fetchUserCommunity",verifyToken,(req,res)=>{
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

app.get("/fetchPostsOfCommunity",verifyToken,(req,res)=>{
	/*work to be done here*/
	const comId = req.userEmail;
	console.log(comId);
	client.query('select * from posts where comId=$1',[comId],(error,results)=>{
		if (error) {
			console.error(error);
			res.status(500).send("Error fetching posts of a community");
		  } else {
			res.status(200).json(results.rows);
		  }
	});
});

/*handle multer error globally*/
function errHandler(err,req,res,next){
	if(err instanceof multer.MulterError){
		res.json({
			success:0,
			message: err.message
		})
	}
}

app.use(errHandler)

app.listen(5000, () => {
	console.log("Server Started on port 5000");
});
