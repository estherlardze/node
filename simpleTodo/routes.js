import users from './data.js'

export const getUsers = (req, res ) => {
    res.status(200).json(users)
}

export const getUser = (req, res) => {
    const user = users.find((user ) => user.id === parseInt(req.params.id))
    
    if(isNaN(parseInt(req.params.id))){
        res.status(404).json({massage: "Invalid Id"})
    }
    
    if(user){
      res.status(200).json(user)
    }
    else{
        res.status(404).json({massage: "user not found"})
    }
}

export const createUser = (req, res) => {
    const newUser = req.body;   
    users.push(newUser)
    res.status(201).json({message: `User with id ${id} has been added`})   
}

export const updateUserInfo = (req, res) => {
    const user = users.find((item ) => item.id === parseInt(req.params.id))

    if(user){
        const {id, firstName, lastName, age } = req.body;
        user.id = id
        user.firstName = firstName
        user.lastName = lastName
        user.age = age
        res.status(200).json({massage: `User ${id} updated successfully`})       
    }else{
        res.status(404).json({massage: 'User not found'}) 
    }
}

export const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id)
    const deletedUser = users.filter((user) => user.id !== userId)
    res.status(200).json({message: `User ${userId} has been deleted`})
}