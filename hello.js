var http=require('http');

http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text-plain'});

    res.end('hello ,,,world\n');

}).listen(1339,'127.0.0.1');
//在cmd端进入hello.js所在路径D:\Atmo\projectone 然后node hello.js就可以看见日志文件内容，
//刷新服务器，按ctrl+c.

console.log('Server runnig at http://127.0.0.1:1339');
