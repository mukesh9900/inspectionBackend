const express= require('express')
const app =express()
const bodyParser = require('body-parser')
const cors = require('cors');
// const axios = require('axios');
// const fs = require('fs');

require('dotenv').config()
require('./connections/mongodb-con');

const inspectionRouter = require('./routes/inspectionRoutes')

//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/api/inspection', inspectionRouter)

const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log(`App running on port: ${port}`)
})