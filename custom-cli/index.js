#!/usr/bin/env node 
 const inquirer = require("inquirer");

const fetchPokemom = async (name) => {
 await fetch(`https://pokeapi.co/api/v2/berry/${name}`)
 .then((response) => response.json())
 .then((data) => console.log(data))
 .catch((err) => console.error(err))
}



inquirer.prompt([{
   type : "input",
   name : "name",
   message : "Enter name of a berry to see its contents: "

}]).then((answer) => {
   const berryName = answer.name
   fetchPokemom(berryName)
} )
  .catch((err) => console.log(err))