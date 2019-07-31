var http = require("http");
var url = require("url");
var fs = require("fs");
 var path = require("path");

http.createServer(function(req,res){
    //得到用户的路径
    var pathname = url.parse(req.url).pathname;
    //默认首页
    if(pathname=="/"){
        pathname="index.html";
    }

    var extname = path.extname(pathname);
    console.log(extname);
    //读取这个文件
    fs.readFile("./static"+pathname,(err,data)=>{
        if(err){
            //若此文件不存在，用404返回
            fs.readFile("./static/404.html",(err,data)=>{
                console.log(2);
                res.writeHead(404,{"Content-Type":"text/html;charset=utf8"});
                res.end(data);
            });
            return;
        };
        //mime类型
        //网页 就是text/html
        //jpg文件 image/jpg
        var mime = getMime(extname);
        res.writeHead(200,{"Content-type":"mime"});
        res.end(data);
    });


}).listen(3000,"127.0.0.1");

function getMime(extname){
    switch(extname){
        case ".html":
            return "text/html";
            break;
        case ".jpg":
            return "image/jpg";
            break;
        case ".css":
            return "text/css";
            break;
    }
}