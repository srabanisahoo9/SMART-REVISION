const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors"); // Add this line
const app = express();
const User = require("./model/user");
// Use CORS middleware
app.use(cors()); // Add this line

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const dataBase =
  "mongodb+srv://srabanis822:8KQuqLQnlVU7dVcG@cluster0.pmtoziq.mongodb.net/smartrevisiondata?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dataBase)
  .then(() => {
    console.log("database  is connnected");
  })
  .catch((err) => console.log("error"));

// Add body-parser middleware to parse JSON request bodies
app.use(express.json()); // Add this line

app.get('/private/getAllUser', async(req,res)=>{
    const allUser= await User.find({});
    res.json({allUser});
})

app.post("/register", async (req, res) => {
  const data = req.body;
  console.log(data);
  const createNewUser = await User.create(data);
  res.json({ createNewUser });
});

app.get("/test", (req, res) => {
  res.json({ message: "srabani" });
});

// Very important
const FormRouter=require('./route/form');
app.use("/form",FormRouter);


app.listen(4000, () => {
  console.log("server is running on port 4000");
});

