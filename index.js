const dotenv = require("dotenv")
const express = require("express")
const read = require("./application")
const cors = require( 'cors')

dotenv.config()
const server = express()

let PORT= process.env.PORT || 3000
server.use(cors())
server.use(express.json())

server.get('/api/v1/',async (request,response)=>{
   let {Path_1,Path_2}=request.body
   read()
   return response.json({menssage:"etiquetas geradas como sucesso - pasta output"})
})

server.listen(PORT,()=>{
 console.log(`servidOr rodando  na porta ${PORT}`)
   })
