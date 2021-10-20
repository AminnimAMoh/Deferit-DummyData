const express=require('express');
const app=express();
const port=process.env.PORT || 3001;

app.get('/reciepts', (req,res)=>{
    res.status(200).send({
        name: 'This is a test responce.',
        status: 'O.K'
    })
})
app.listen(port,()=>{
    console.log(`API Server is Running on ${port}`);
})