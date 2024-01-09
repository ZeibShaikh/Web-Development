console.log("Script running");


const generateRandomColor=()=>{
    val1=Math.floor(Math.random() * 255) + 1;
    val2=Math.floor(Math.random() * 255) + 1;
    val3=Math.floor(Math.random() * 255) + 1;
    return `rgb(${val1},${val2},${val3})`
}
let boxes=document.querySelectorAll(".box").forEach((e)=>{
    e.style.backgroundColor=generateRandomColor();
})