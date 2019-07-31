var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});

    if(res.url == '/favicon.ico'){
        return;
    }
    //stat状态检测
    fs.stat('./album/aaa',function(err,data){
        //检测这个路径是不是一个文件夹
        console.log(data.isDirectory());
    });
});

server.listen(3000,"127.0.0.1")