const express=require('express')
const app=express();
const port=process.env.PORT || 3001;
const data=require('./responce.json');

// http://localhost:3001/responce?page=1&limit=5

app.get('/responce', (req,res)=>{
    const page=req.query.page;
    const limit=req.query.limit;

    const startIndex=(page-1)*limit;
    const endIndex=page*limit;

    const constrainData=data.slice(startIndex, endIndex);
    res.json(constrainData)
})

app.listen(port, ()=>{
    console.log('I am Listening');
})
