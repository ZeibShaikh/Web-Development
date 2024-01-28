let prom1=new Promise((resolve,reject)=>{
    let a=Math.random()
    if(a<0.5){
        reject("Rejected")
    }
    else{
    setTimeout(() => {
        resolve("Zeib")
    }, 1000);
}})
prom1.then((e)=>{
    console.log(e)
}).catch((e)=>{
    console.log(e)
})