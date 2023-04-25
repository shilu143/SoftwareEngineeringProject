const express = require("express");
const cors = require("cors");
const app = express();
const { Client } = require("pg");

app.use(express.json());
app.use(cors());

const client = new Client({
	user: "postgres",
	host: "localhost",
	database: "MyGateAppDB",
	password: "123456",
	port: 5432,
});
client.connect();

app.get("/api", (req, res) => {
	// res.json({ users: ["user1", "user2", "user3"] });
	res.status(200).send("This is the backend Data");
});

app.listen(5000, () => {
	console.log("Server Started on port 5000");
});
