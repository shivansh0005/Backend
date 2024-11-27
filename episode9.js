const fs=require("fs");
const a=100;


setImmediate(()=>console.log("setImmediate"));

fs.readFile("./file.txt","utf8",()=>{
    console.log("File is reading ");
});

setTimeout(()=>console.log("Timeout expired"),0);

function printa(){
    console.log("a= ",a);
}
printa();
console.log("Last line of file");

 