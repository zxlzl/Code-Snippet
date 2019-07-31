var http = require("http");
var url = require("url");

var server = http.createServer(function(req,res){
    var uesrUrl=req.url;
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    
    if(uesrUrl.substr(0,9)=="/student/"){
        var studentId = uesrUrl.substr(9);
        if(/^\d{3}$/.test(studentId)){
            res.end("你查询的学生id为："+studentId);
        }else{
            res.end("学生id位数不对");
        }
    }else if(uesrUrl.substr(0,9)=="/teacher/"){
        var teaId = uesrUrl.substr(9);
        if(/^\d{4}$/.test(teaId)){
            res.end("你查询的老师id为："+teaId);
        }else{
            res.end("老师id位数不对");
        }
    }else{
        res.end("请检查url");
    }
});

server.listen(3000,"127.0.0.1")