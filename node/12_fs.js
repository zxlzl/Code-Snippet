var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
    //不处理图标
    if(res.url == './favicon.ico'){
        return;
    }
    //遍历album里面的所有文件、文件夹
    fs.readdir("./album/",function(err,files){
        var wenjianjia = [];

        //迭代器把异步变为同步
        (function iterration(i){
            //遍历结束
            if( i == files.length){
                console.log(wenjianjia);
                return;
            }
            fs.stat('./album/'+files[i],function(err,stats){
                if(stats.isDirectory()){
                    wenjianjia.push(files[i]);
                }
                iterration(i+1);
            });
        })(0);
    });
    res.end();
});


server.listen(3000,"127.0.0.1");