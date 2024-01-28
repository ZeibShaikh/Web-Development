import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/todo.js";

let connection=await mongoose.connect("mongodb://localhost:27017/Video96")
const app=express();
const port=5000;

app.get('/',(req,res)=>{
    const todo=new Todo({title:"Zeib Shaikh",desc:"Dev",isdone:false})
    todo.save()
    res.send("This is a test");
})

app.listen(port,()=>{
    console.log("Conneted")
})
