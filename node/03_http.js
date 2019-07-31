var http = require("http");
var server = http.createServer(function (req, res) {
    //设置一个响应头
    console.log('服务器接收到了请求'+req.url);
    //设置头部
    res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});
    res.write("<h1>我是主标题</h1>");
    res.write("<h2>我是2标题</h2>");
    res.write("<h3>我是3标题</h3>");
    res.write("<h4>我是4标题</h4>");
    res.end((1+2+3).toString());
}).listen(3000,"127.0.0.1");