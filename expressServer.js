const express=require('express')
const app=express();
const port=process.env.PORT || 3001;
const data=require('./responce.json');

// http://localhost:3001/responce?page=1&limit=5

app.get('/responce', (req,res)=>{
    const page=req.query.page;
    const limit=req.query.limit;
    console.log(page, limit);
    res.json(data)
})

app.listen(port, ()=>{
    console.log('I am Listening');
})
