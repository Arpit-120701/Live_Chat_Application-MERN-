const express = require('express')
const dotenv = require('dotenv')
const { chats } = require('./data/data')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000
const path = require('path')
require('dotenv').config({path:path.resolve(__dirname,'./.env')})
const userRoutes =  require('./Routes/userRoutes')


dotenv.config()
connectDB()
const app = express()

//apis 
app.get('/',(req,res)=>{
    res.send("api is runnig ")
})

app.use('/api/user', userRoutes)

app.listen(5000,()=>{
    console.log(`Server is running @localhost:${PORT}`)
})
