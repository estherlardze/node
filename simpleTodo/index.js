const express = require("express")
const app = express()
const todos = require("./data")
const port = 3000

//get all todos on port 3000 
app.get("/", (req, res) => {
    res.status(200).json(todos)
})

//get all todos on port 3000 '/api/todos'
app.get('/api/todos', (req, res) => {
    res.status(200).json(todos)
})

// get a specific todo
app.get('/api/todos/:id', (req, res) => {
    const todo = todos.find((item )=> item.id === parseInt(req.params.id))
    if(todo){
      res.status(200).json(todo)
    }else{
        res.status(404).json({massage: "Todo not found"})
    }
})
    
// post a todo
app.post('/api/todos', (req, res) => {
    const newTodo = req.body;   
    todos.push(newTodo)
    res.status(201).json(newTodo)

})

// update a todo
app.put('/api/todos/:id', (req, res) => {
    const todo = todos.find((item )=> item.id === parseInt(req.params.id))

    if(todo){
        const {id, desc, completed } = req.body;
        todo.id = id
        todo.desc = desc
        todo.completed = completed
        res.status(200).json({massage: 'Todo updated successfully'})       
    }else{
        res.status(404).json({massage: 'Todo unable to update'}) 
    }
})

//delete a todo
app.delete('/api/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id)
    const deletedTodo = todos.filter((todo) => todo.id !== todoId)
    res.json(deletedTodo)
})

app.listen(port, console.log(`server is running on port ${port}`))