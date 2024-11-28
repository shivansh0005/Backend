const fs=require("fs");
const a=100;


setImmediate(()=>console.log("setImmediate"));
Promise.resolve("promise").then(()=>console.log("Promise"));
fs.readFile("./file.txt","utf8",()=>{
    console.log("File is reading ");
});

setTimeout(()=>console.log("Timeout expired"),5);
process.nextTick(()=>console.log("process.nextTick"));

function printa(){
    console.log("a= ",a);
}
printa();
console.log("Last line of file");

 