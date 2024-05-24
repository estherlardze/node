import express from "express";
import { users } from "./data.js";
const app = express();
app.use(express.json());
const port = 3000;

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.get("/api/users/:userId", (req, res) => {
  const parsedId = parseInt(req.params.userId);
  const selectedUser = users.find((user) => user._id === parsedId);

  if (isNaN(parsedId)) {
    return res.status(404).send("Invalid Id");
  }

  if (!selectedUser) {
    return res.status(404).send("User not found");
  } else {
    res.send(selectedUser);
  }
});


app.post("/api/users", (req, res) => {
 const { body } = req;

 const  newUser = {id: users[users.length - 1]._id + 1, ...body}
  users.push(newUser);
  return res.status(201).send(newUser)
})


app.put("/api/users/:userId", (req, res) => {
  const { body, params: { userId } } = req;

  const parsedId = parseInt(userId)

  if(isNaN(parsedId)) {
    res.status(404).send("Invalid Id")
    return   
  }
  
  const userIndex = users.findIndex(user => user._id === parsedId);

  if(userIndex === -1) {
     res.sendStatus(404).send("User not found")
     return;
  }
  users[userIndex] = {id: parsedId, ...body}
   res.status(200).send("user updated successfully")

})

app.patch('/api/users/:userId', (req, res) => {
  const { body, params: { userId } } = req;

  const parsedId = parseInt(userId)

  if(isNaN(parsedId)) {
    res.status(404).send("Invalid Id")
    return   
  }
  
  const userIndex = users.findIndex(user => user._id === parsedId);
  users[userIndex] = {...users[userIndex], ...body}
   res.status(200).send("user updated successfully")
})

app.delete('/api/users/:userId', (req, res) => {
  const {params: { userId } } = req;

  const parsedId = parseInt(userId)

  if(isNaN(parsedId)) {
    res.status(404).send("Invalid Id")
    return   
  }

  const userIndex = users.findIndex(user => user._id === parsedId);
  if(userIndex === -1) {
     res.sendStatus(404).send("User not found")
     return;
  }
  users.splice(userIndex, 1)
   res.status(200).send("user deleted successfully")

})
app.listen(port, console.log(`server is listening on port ${port}`));
