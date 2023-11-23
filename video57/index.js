console.log("Hello")
for(let i=0;i<10;i++){
    console.log(i)
}
let a=0;
while(a<10){
    console.log(a)
    a++;
}
let b=30
do{
    b++
    console.log(b)
    
}while(b<10)
let obj={
a:"aa",
b:"bb"
}
for(let key in obj){
    const element=obj[key];
    console.log(key,element)
}