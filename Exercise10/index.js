let a=Math.random();
// 0.01-0.3
// 0.3-0.6
// 0.6-0.9

let first="";
let second="";
let third="";

if(a>0.1&&a<0.3){
    first="Crazy"
}
else if(a>0.3&&a<0.6){
    first="Amazing"
}
else if(a>0.6&&a<0.9){
    first="Fire"
}

if(a>0.1&&a<0.3){
    second="Engine"
}
else if(a>0.3&&a<0.6){
    second="Food"
}
else if(a>0.6&&a<0.9){
    second="Garment"
}

if(a>0.1&&a<0.3){
    third="Bros"
}
else if(a>0.3&&a<0.6){
    third="Limited"
}
else if(a>0.6&&a<0.9){
    third="Hub"
}

console.log(`${first} ${second} ${third}`)