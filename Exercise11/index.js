let arr=[1,2,3,4,5]

const fact=(a,b)=>{
    return a*b
}

console.log(arr.reduce(fact))
let fact1=1;
for(let i=0;i<arr.length;i++){
    fact1=fact1*arr[i]
}
console.log(fact1)