const express = require("express");
const cors = require("cors");
const app = express();
const { Client } = require("pg");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const https = require("https");

// const imageUrl =
// 	"https://upcdn.io/W142hJk/image/demo/4mUeqoGb1t.webp?w=600&h=600&fit=max&q=70";
// const fpt = "./image.png";

// https.get(imageUrl, (response) => {
// 	response.pipe(fs.createWriteStream(fpt));
// });

const jwtkey = "college_reddit"; /*key for jwt*/

const filePath = "seeder.sql";

app.use(express.json());
app.use(cors());

function verifyToken(req, res, next) {
	let token_from_frontend = req.headers.authorization;
	// const decoded = jwt.decode(token,{complete:true});
	// const userEmailId = decoded.payload.userId;
	// console.log("Email sent="+userEmailId);
	// console.log("token="+token_from_frontend);
	if (token_from_frontend) {
		const token = token_from_frontend.split(" ")[1];
		// console.log("token 1="+token);
		jwt.verify(token, jwtkey, (error, valid) => {
			if (error) {
				res.send("Please send correct token");
				console.log(error);
			} else {
				console.log("Valid:" + valid.email);
				req.userEmail = valid.email;
				next();
				// res.send("Authorized token!");
			}
		});
	} else {
		res.send({ result: "Please add token with header" });
	}
	// console.log(token_from_frontend)
	// console.warn("Middleware called!" + token);
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
app.post("/loginCheck", async (req, res) => {
	const email = req.body.email,
		password = req.body.password;
	console.log(req.body);
	var query = `select profileimage, count(*) from users where email='${email}' and password='${password}' group by users.profileimage`;
	console.log(query);
	client.query(query, (error, results) => {
		if (error) {
			console.log("error hogaya");
			console.error(error);
			res.status(500).send("Error! Try again");
		} else {
			const ct = results.rows[0].count;
			const profileImage = results.rows[0].profileimage;
			console.log("dasdf", ct);
			if (ct == 1) {
				jwt.sign(
					{ email: email },
					jwtkey,
					{ expiresIn: "24h" },
					(err, token) => {
						if (err) {
							res.status(401).send({ result: "Session Timeout" });
						} else {
							res.send({
								userEmail: email,
								auth: token,
								profileImage: profileImage,
							});
						}
					}
				);
			} else {
				res.status(401).send({
					result: "Invalid Username or Password",
				});
			}
		}
	});
});

/*storage engine*/
const storage = multer.diskStorage({
	destination: "./upload/images",
	filename: /*unique filename for each user*/ (req, file, cb) => {
		/*use file since already we are getting the file object here*/
		cb(
			null,
			`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
		);
	},
});

/*to upload the files*/
const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 5, // 5 MB
		files: 1,
	},
	fileFilter: (req, file, cb) => {
		if (
			file.mimetype == "image/png" ||
			file.mimetype == "image/jpg" ||
			file.mimetype == "image/jpeg"
		) {
			cb(null, true);
		} else {
			return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
		}
	},
});

/*send the response back to the url, so the user can use it*/
/*images folder will serve the static content*/
app.use("/profile", express.static("upload/images"));

/*.single=only single files with a particular name should be uploaded in the request*/

app.get("/initializeDatabase", (req, res) => {
	fs.readFile(filePath, "utf-8", function (err, data) {
		if (err) {
			console.error(err);
			return;
		}
		console.log(data);

		client.query(data);
	});

	res.status(200).send("This is the backend Data");
});

app.post("/testImgUpload", upload.single("profile"), async (req, res) => {
	console.log(req.file);
	res.json({
		success: 1,
		profile_img_url: `http://localhost:5000/profile/${req.file.filename}`,
	});
});

/*insert user*/
app.post("/userSignUp", upload.single("profile"), async (req, res) => {
	console.log(req.body);
	const name = req.body.name,
		gender = req.body.gender,
		age = req.body.age,
		password = req.body.password,
		email = req.body.email;
	// console.log(req.file);
	const profile_img_url = `http://localhost:5000/profile/${req.file.filename}`;
	// console.log("profile image = ", profile_img_url);
	console.log("Age " + age);

	/*signup the user*/
	client.query(
		"insert into users(email,name,gender,age,password,profileImage) values($1,$2,$3,$4,$5,$6)",
		[email, name, gender, age, password, profile_img_url],
		(error, results) => {
			if (error) {
				console.error(error);
				res.status(500).send("Error in signing up");
			} else {
				res.status(200).send("Sign Up done successfully");
			}
		}
	);
});

/*post click action api,it will send the data of the complete post,including comment count*/
app.get("/returnDetailsOfAPost", verifyToken, async (req, res) => {
	const postId = req.query.postId;
	let commentCount = 0;
	console.log(postId);
	commentCount = await client.query(
		"select count(*) from comments where postId=$1",
		[postId]
	);
	let commentRows = await client.query(
		"select * from comments where postid=$1",
		[postId]
	);
	const communityId = await client.query(
		"select * from posts where postId=$1",
		[postId]
	);

	/*find name of the creator of the post*/
	let creatorName = await client.query("select u.name  from users u,posts p where p.postId=$1 and p.createdByWhom=u.id",
		[postId]);
	console.log(creatorName.rows[0].name);
	// const name = creatorName.rows[0].name;
	// console.log(communityId);
	// console.log(creatorName)
	let name = creatorName.rows[0].name;
	const result = communityId.rows.map((row) => ({
		...row,
		commentCount: commentCount.rows[0].count,
		creatorName: name,		
		commentRows: commentRows.rows,
	}));
	// console.log(result);
	
	res.status(200).send(result);
});

/*insert comments, called when a comment is added*/
app.post("/insertCommentByUserAtAPost", verifyToken, async (req, res) => {
	console.log(req.body);
	let createdByWhom = req.userEmail,
		parentComment = req.body.parentComment,
		text = req.body.text,
		postId = req.body.postId;
	let userId = await client.query("select * from users where email=$1", [
		createdByWhom,
	]);
	userId = userId.rows[0].id;
	await client.query(
		"insert into comments(createdByWhom,parentComment,writtenText,timeCreated,votes,postId) values($1,$2,$3,CURRENT_TIMESTAMP,0,$4)",
		[userId, parentComment, text, postId],
		(error, results) => {
			if (error) {
				console.log(error);
				res.status(500).send("Error adding comment");
			} else {
				res.status(200).send("Comment added successfully");
			}
		}
	);
});

/*send post ids of a commuity to front end*/
app.get("/fetchPostsOfCommunity", verifyToken, (req, res) => {
	/*work to be done here*/
	const comId = req.query.comId;
	console.log("Community id=" + comId);
	client.query(
		"select * from posts where comId=$1",
		[comId],
		(error, results) => {
			if (error) {
				console.error(error);
				res.status(500).send("Error fetching posts of a community");
			} else {
				res.status(200).json(results.rows);
			}
		}
	);
});

app.get("/fetchCommunities", verifyToken, (req, res) => {
	/*work to be done here*/
	const userEmail = req.userEmail;
	// console.log(comId);
	let query = `SELECT c.comid, c.comName, c.category, c.communityProfileImage, c.timeCreated
				FROM communities c
				INNER JOIN users u ON u.id = c.createdByWhom
				WHERE u.email = '${userEmail}'
				`;
	client.query(query, (error, results) => {
		if (error) {
			console.error(error);
			res.status(500).send("Error fetching user communities");
		} else {
			res.status(200).json(results.rows);
		}
	});
});

/*create post by a user in a community*/
app.post(
	"/insertPostForACommunity",
	verifyToken,
	upload.single("profile"),
	async (req, res) => {
		const creatorEmail = req.userEmail;
		const title = req.body.title;
		const comId = req.body.comId;
		const postBody = req.body.postBody;
		let profile_img_url = "";
		console.log(title, comId);
		let creatorId = await client.query(
			"select * from users where email=$1",
			[creatorEmail]
		);
		creatorId = creatorId.rows[0].id;
		
		if (req.file == undefined) {
			console.log("yo vro!");
			profile_img_url = "";
		} else {
			profile_img_url = `http://localhost:5000/profile/${req.file.filename}`;
		}
		client.query(
			"insert into posts(comId,postTitle,postBody,createdByWhom,timeCreated,votes,postImage) values($1,$2,$3,$4,CURRENT_TIMESTAMP,0,$5)",
			[comId, title,postBody ,creatorId, profile_img_url],
			(error, results) => {
				if (error) {
					console.log(error);
					res.status(500).send("Error inserting posts");
				} else {
					res.status(200).send("Posts inserted successfully");
				}
			}
		);
	}
);

/*api to check whether a community exists*/
app.get("/checkSameNameCommunity", verifyToken, (req, res) => {
	const comName = req.query.comName;
	// console.log(req.query);
	console.log("Community name from frontend=" + comName);
	client.query(
		"select * from communities where comName=$1",
		[comName],
		(error, results) => {
			if (error) {
				console.error(error);	
				res.status(500).send("Error fetching posts of a community");
			} else {
				console.log(`${results.rowCount}`);
				if (results.rowCount > 0) {
					res.json({ exists: false });
				} else {
					res.json({ exists: true });
				}
			}
		}
	);
});

/**/

/*api to insert into a community into the database*/
app.post(
	"/insertCommunityInDatabase",
	verifyToken,
	upload.single("profile"),
	async (req, res) => {
		console.log(req.body);
		const name = req.body.comName;
		let profile_img_url;
		if (req.file) {
			profile_img_url = `http://localhost:5000/profile/${req.file.filename}`;
		}
		console.log("yo");
		console.log(`category = ${req.body.category}`);
		const category = req.body.category;
		// console.log(typeof(category));
		const userEmail = req.userEmail;
		const categoryArray = Array.isArray(category) ? category : [category];
		console.log("fasdfa", categoryArray);

		try {
			const user = await client.query(
				"select * from users where email=$1",
				[userEmail]
			);
			const userId = user.rows[0].id;
			if (req.file) {
				await client.query(
					"insert into communities(comName, createdByWhom, timeCreated, category, communityProfileImage) values($1, $2, CURRENT_TIMESTAMP, $3, $4)",
					[name, userId, categoryArray, profile_img_url]
				);
			} else {
				await client.query(
					"insert into communities(comName, createdByWhom, timeCreated, category) values($1, $2, CURRENT_TIMESTAMP, $3)",
					[name, userId, categoryArray]
				);
			}
			const comIdData = await client.query(
				"select * from communities where comName=$1",
				[name]
			);
			const comId = comIdData.rows[0].comid;
			console.log(comId);
			await client.query("insert into communityUser values($1,$2)", [
				userId,
				comId,
			]);
			res.status(200).send("Community created successfully");
		} catch (error) {
			console.error(error);
			res.status(500).send(
				"Error inserting data into the communities table"
			);
		}
	}
);

/*handle multer error globally*/
function errHandler(err, req, res, next) {
	if (err instanceof multer.MulterError) {
		res.json({
			success: 0,
			message: err.message,
		});
	}
}

app.use(errHandler);

app.listen(5000, () => {
	console.log("Server Started on port 5000");
});