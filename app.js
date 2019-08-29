다른방식

const http = require('http');

const hostname = '127.0.0.1';
const port = '1337';

// http모듈의 createServer 함수를 호출하여 서버를 생성합니다.
// req : request. 웹 요청 매개변수, res : response. 웹 응답 매개변수
http.createServer(function(req, res){
    // writeHead : 응답헤더를 작성합니다.
    // 200 : 응답 성공, text/html : html 문서
    res.writeHead(200, {'Content-Type': 'text/html'});
    // end : 응답본문을 작성합니다.
    res.end('Hello World111');
}).listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});

