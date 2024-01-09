let arr=[1,2,3,4,5,6]

// const arr1=arr.map((e)=>{
//     return e**2
// })
// console.log(arr1)

// const gSeven=(e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }

// console.log(arr.filter(gSeven))


const mul=(a,b)=>{
    return a+b
}

console.log(arr.reduce(mul))