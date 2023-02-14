const express = require('express')


const server = express()


const port = process.env.PORT || 3333

server.get("/",(req,res)=>{
  return res.send("pagina inicial")
})
server.listen(port, ()=>{
  console.log(`listen in port : ${port}`)
})
