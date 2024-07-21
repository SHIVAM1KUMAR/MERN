const http=require("http");

//create a server
let server=http.createServer(function(request,response){
    //console.log(reuest.url);
    if (request.url === "/"){
        response.write("This is home page");
    }
    response.end();
});



server.on("connection",function(){
    console.log("new connection");
});



//listening the server on port
server.listen(3000,function(){
    console.log("i am listening");
});