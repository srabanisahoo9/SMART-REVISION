const mongoose = require('mongoose')
const express = require('express')
const app = express()

const dataBase = 'mongodb+srv://srabanis822:8KQuqLQnlVU7dVcG@cluster0.pmtoziq.mongodb.net/smartrevisiondata?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dataBase).then(()=>{
    console.log('connection is successful')
}).catch((err)=>console.log('error'))

app.get('/', (req, res)=>{
    res.json({message:'srabani'})
})
app.listen(4000, () => {
    console.log('server is running')
});