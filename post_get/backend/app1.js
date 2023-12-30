
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://abdulsk2910:Sadiya2910@cluster0.2pudbma.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('MongoDB connected') })
    .catch((err) => { console.log(err) })

const userschema = {
    username: String,
    password: String
}
const User = mongoose.model('User', userschema)

// Routes
app.get('/todos',async(req,res) => {
  try{
    const todo = await Todo.find()
    console.log("gettodos",todo)
    res.json(todo)

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error'})
  }
})

app.post('/signup', async (req, res) => {
  console.log(req.body)
  const { username, password} = req.body;

   try{
    const hashedpassword = await bcrypt.hash(password,10)
     const newUser = new User({ username, password: hashedpassword })
     await newUser.save()
     console.log (newUser)
     res.json({message: "User created successfully"})
  
    } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error'})

  }
});

app.post('/signin', async (req, res) => {
   console.log(req.body)
   const { username, password} = req.body;

   try{
     const user = await User.findOne({username})

     if(!user){
      return res.status(404).send("user not found")
     }
     const passwordMatch = await bcrypt.compare(password,user.password)
     console.log("passwordMatch",passwordMatch)
  
    } catch (error) {
     console.error(error)
     res.status(500).json({ error: 'Internal Server Error'})

  }
});


// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
