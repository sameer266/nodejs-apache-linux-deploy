const http=require('http');
const express=require('express');
const app=express()

app.get('/',(req,res)=>{
res.send('Hello from Node.js');
});

app.listen(8000,()=>{
console.log('Runnung in port 8000');
});
