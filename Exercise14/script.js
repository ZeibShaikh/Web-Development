function getRandomTime(){
    let randomT=(Math.floor(Math.random()*7)+1)*1000
    return randomT
}
function getDots(){
//    let html=` <div class="dot">
//    <span id="hi">.</span><span id="hi1">.</span><span id="hi2">.</span></p>
// </div>`
   let html=`
   <span id="hi">.</span><span id="hi1">.</span><span id="hi2">.</span></p>
`

return html
}
async function one(){
    return new Promise((resolve)=>{
    setTimeout(() => {
        document.getElementById("p-1").innerHTML="Initializing Hacking"+getDots()
        resolve();
    }, getRandomTime());
})}
async function two(){
    return new Promise((resolve)=>{
    setTimeout(() => {
        document.getElementById("p-2").innerHTML="Reading your files"+getDots()
        resolve();
    }, getRandomTime());
})}
async function three(){
    return new Promise((resolve)=>{
    setTimeout(() => {
        document.getElementById("p-3").innerHTML="Password Files Detected"+getDots()
        resolve();
    }, getRandomTime());
})}
async function four(){
    return new Promise((resolve)=>{
    setTimeout(() => {
        document.getElementById("p-4").innerHTML="Sending all passwords and personal files to server"+getDots()
        resolve();
    }, getRandomTime());
})}
async function five(){
    return new Promise((resolve)=>{
    setTimeout(() => {
        document.getElementById("p-5").innerHTML="Cleaning Up"+getDots()
        resolve();
    }, getRandomTime());
})}
async function main(){
    await one()
    await two()
    await three()
    await four()
    await five()
}
main()
getRandomTime()