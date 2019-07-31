var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});

    if(res.url == '/favicon.ico'){
        return;
    }
    fs.mkdir("./album/aaa");
});

server.listen(3000,"127.0.0.1")