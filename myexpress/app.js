import express from "express";
import { users } from "./data.js";
const app = express();
const port = 3000;

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:userId", (req, res) => {
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

app.listen(port, console.log(`server is listening on port ${port}`));
