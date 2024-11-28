const http=require("http");
const server=http.createServer(function(req,res){
    if(req.url==="/getsecret"){
        res.end("Top secret!");
    }
    else{
   res.end("hello world");
    }
});
server.listen(7777);

