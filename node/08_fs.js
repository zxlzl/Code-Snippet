var http = require("http");
var fs = require("fs");
//不处理小图标
var server = http.createServer(function(req,res){
    if(res.url == '/favicon.ico'){
        return;
    }
    //给用户加一个1~100的id
    var userId = parseInt(Math.random()*100);
    console.log("welcome"+userId);
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    
    //两个参数，第一个参数是完整路径，写./
    //第二个参数就是回调函数，表示当前文件读取成功之后做的事情
    fs.readFile("./test/1.txt",'utf8',(err,data)=>{
        if(err)
            throw err;
            console.log(userId+"end");
    });
});

server.listen(3000,"113.251.222.131");