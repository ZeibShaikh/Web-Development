const express=require('express')
const app=express()
const port=5000

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    let siteName="Hi"
    res.render('index',{siteName:siteName})
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})