
import express from "express";
import mongoose from "mongoose"; 
import bcrypt from "bcryptjs"; 

const PORT = 3000;

const app = express();
app.use(express.json());


mongoose
  .connect(
    "mongodb+srv://vikaskumar20012001:Vikas123@mern-12-wd.xi1oap2.mongodb.net/",
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
  
const UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

// ----------------------------------------------------------------------------
// Routes (CRUD Operations):
// ----------------------------------------------------------------------------

// Create (Register):
app.post("/register", async (req, res) => {
  //   const { email, username, password } = req.body;
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;

  // Hashing the password using bcrypt (with a salt round of 10)
  let hashedPassword = await bcrypt.hash(password, 10);

  // Creating a new instance of the User model
  const newUser = new User({
    email: email,
    username: username,
    password: hashedPassword,
  });

  // Saving the new user document to the database
  const savedUser = await newUser.save();

  if (!savedUser)
    return res.status(400).send({ message: "Error creating user" });

  res.status(201).send({ message: "user created successfully" });
});


app.post("/login",async(req,res)=>{
  let email = req.body.email;
  let password = req.body.password;
  const user = await User.findOne({email});
  if(!user)
    return res.status(404).send({message:"user not found"});
  const isPasswordValid = await bcrypt.compare(password,user.password);
  if(!isPasswordValid)
    return res.status(401).send({message:"invalid password"});

  //token assign
  
  const token = jwt.sign({id:user._id},"secretkey",{expiresIn:"1h"});
  res.status(200).send({message:"user logged in successfully"});
})  

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "access denied no token availble" });
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "invalid token" });
  }
};

app.get("/userlist", verifyToken, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read (Get All Users):
app.get("/allusers", async (req, res) => {
  // User.find() retrieves all documents from the 'users' collection
  const users = await User.find();

  if (!users) return res.status(404).send({ message: "No users found" });

  res.status(200).send(users);
});

app.get("/", (req, res) => {
  res.end("hii");
});

app.listen(PORT, () => {
  console.log("server started");
});

app.put("/update/:id",async(req,res)=>{
  const {id} = req.params;
  const {email,username,password} = req.body;
  const updatedUser = await User.findByIdAndUpdate(id,{email,username,password},{new:true});
  if(!updatedUser)
    return res.status(404).send({message:"user not found"});
  res.status(200).send({message:"user updated successfully"});
})

app.delete("/delete/:id",async(req,res)=>{
  const {id} = req.params;
  const deletedUser = await User.findByIdAndDelete(id);
  if(!deletedUser)
    return res.status(404).send({message:"user not found"});
  res.status(200).send({message:"user deleted successfully"});
})
