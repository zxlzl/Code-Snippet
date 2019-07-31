var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    if (req.url == "/yuan"){
        fs.readFile("./test/haha.html",function (err,data) {
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
            res.end(data);
        });
    }else if (req.url == "/fang"){
        fs.readFile("./test/xixi.html",function (err,data) {
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
            res.end(data);
        });
    }else if (req.url == "/0.jpg"){
        fs.readFile("./test/0.jpg",function (err,data) {
            res.writeHead(200,{"Content-type":"image/jpg"});
            res.end(data);
        });
    }else if (req.url == "/bbbbbb.css"){
        fs.readFile("./test.aaaaaa.css",function (err,data) {
            res.writeHead(200,{"Content-type":"text/css"});
            res.end(data);
        });
    }else {
        res.writeHead(404,{"Content-type":"text/html;charset=UTF-8"});
        res.end("嘻嘻嘻，没有这个页面哟！");
    }
});

server.listen(3000,"127.0.0.1");