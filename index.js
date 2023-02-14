const dotenv = require("dotenv")
const express = require("express")
const read = require("./application")
const cors = require( 'cors')

dotenv.config()
const server = express()

let PORT= process.env.PORT || 3000
server.use(cors())
server.use(express.json())

server.get('/',async (request,response)=>{
  // let {Path_1,Path_2}=request.body
   read()
   return response.send("etiquetas geradas como sucesso - pasta output")
)

server.listen(PORT,()=>{
 console.log(`servidOr rodando  na porta ${PORT}`)
   })
