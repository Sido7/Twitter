const express =  require('express')
const bodyParser = require('body-parser')

const {Port} = require('./configs/server.config')

const createServer = async ()=> {
    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.get('/',(req,res)=>{
        res.send("heehehe")
    })

    app.listen(Port, (err)=>{
        if(err){
            console.log("unable to connect to create the server")
        }
        console.log("server created at port ",Port)
    })

}

createServer()

