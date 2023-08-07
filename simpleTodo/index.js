import express from 'express'
import { getUser, getUsers, createUser, updateUserInfo, deleteUser } from './routes.js'

const app = express()
const port = 3000


app.get("/", (req, res) => {
    res.send("Hello from Homepage")
})

// get all users
app.get('/users', getUsers)

//get a user with id
app.get('/users/:id', getUser)
    
// post a todo
app.post('/users', createUser)

// update a todo
app.patch('/users/:id', updateUserInfo)

//delete a todo
app.delete('/api/todos/:id', deleteUser)

app.listen(port, console.log(`server is running on port ${port}`))