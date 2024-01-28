use("Video95")

db.createCollection("courses")

// db.courses.insertOne({
//     name:"Zeib",
//     number:1,
//     position:"Developer"

// })

// let a=db.courses.find()
// console.log(a)

// db.courses.updateOne({name:"Zeib"},{$set:{number:10}})

let a=db.courses.find()
console.log(a)

// db.courses.deleteOne({name:"Zeib"})