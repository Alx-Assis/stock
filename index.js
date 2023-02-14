const express = require('express')


const server = express()


const port = process.env.PORT || 3333
server.listen(port, ()=>{
  console.log(`listen in port : ${port}`)
})
