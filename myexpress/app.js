const express = require("express")
const app  = express()
const port = 3000

const server = app.get('/plantae/:genus', (req, res) => {
    const specie = req.params.genus
    res.send(`Genus name in ${specie}`)
})  

 server.listen(port, console.log(`server is listening on port ${port}`))