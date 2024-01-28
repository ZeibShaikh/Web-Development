async function getData(){
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data= await x.text();
    console.log(data)
    return 455
}

async function main(){
    console.log("hello");
    console.log("hii");
    console.log("bye");
    let data1=await  getData();
    console.log("bye bye")
    console.log("final")
}

main()