import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([])
  const [newTodos, setNewTodos] = useState('');

  useEffect(() => {


    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/todos')
      console.log("response",response.data)
      setTodos(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  

  const addTodo = async () => {
    const data ={
      text: newTodos,
      completed: false
    }
    try {
      const response = await axios.post('http://localhost:5000/todos', data);
      
      console.log("response",response)
       fetchTodos()
      ([...todos, response.data]);
      setNewTodos('');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <h1>Todo App</h1>
       <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
      <div>
        <input type="text" value={newTodos} onChange={(e) => {setNewTodos(e.target.value)} }/>
       
        <button onClick={addTodo}>Add todo</button>
      </div>
    </div>
  );
}

export default App;
