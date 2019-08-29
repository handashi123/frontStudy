var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
    // 1. 실제 요청한 주소 전체를 콘솔에 출력
    console.log(request.url);

    var parsedUrl = url.parse(request.url);

    // 2. parsing 된 url 중에 서버URI에 해당하는 pathname 만 따로 저장
    var resource = parsedUrl.pathname;
    console.log('resource path=%s', resource);

    // 3. 리소스에 해당하는 문자열이 아래와 같으면 해당 메시지를 클라이언트에 전달
    var status = 200;
    var retVal = '';

    if(resource == '/address'){
        retVal = '서울특별시 강남구 논현1동 111';
    }else if(resource == '/phone'){
        retVal = '02-3545-1237';
    }else if(resource == '/name'){
        retVal = 'Hong Gil Dong';
    }else{
        status = 404;
        retVal = '404 Page Not Found';
    }

    response.writeHead(status, {'Content-Type':'text/html;charset=UTF-8'});
    response.end(retVal);

});

// 4. 서버포트 80번으로 변경
server.listen(80, function(){
    console.log('Server is running...');
});