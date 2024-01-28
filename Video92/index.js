const express=require('express');
const app=express();
const port=5000

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    let nameFirst="first app";
    let searchText="search here"
    res.render('index',{nameFirst:nameFirst})
})

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})
