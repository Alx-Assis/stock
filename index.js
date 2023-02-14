const express = require('express')
const test = require("./application")

const server = express()


const port = process.env.PORT || 3333

server.get("/",(req,res)=>{
  test()
  return res.send("pagina inicial")
})
server.listen(port, ()=>{
  console.log(`listen in port : ${port}`)
})
