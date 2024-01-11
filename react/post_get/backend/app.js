
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://abdulsk2910:Sadiya2910@cluster0.2pudbma.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('MongoDB connected') })
    .catch((err) => { console.log(err) })

const Todoschema = {
    text: String,
    complete: Boolean
}
const Todo = mongoose.model('market',Todoschema)


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

app.post('/todos', async (req, res) => {
  console.log(req.body)
  const { text, completed } = req.body;

   try{
     const todo = new Todo({ text,completed })
     await todo.save()
     res.json(todo)
  
    } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error'})

  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
