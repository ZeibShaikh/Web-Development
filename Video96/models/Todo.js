// import mongoose from "mongoose";

// const todoSchema=new mongoose.Schema({
//     title:String,
//     desc:String,
//     isdone:Boolean
// });

// export const Todo=mongoose.model('Todo',todoSchema)

























import mongoose from "mongoose";

const todoSchema =new mongoose.Schema({
    title:String,
    pos:String,
    isDone:Boolean
})


export const Todo=mongoose.model('Todo',todoSchema)