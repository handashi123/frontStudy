var http = require('http');

// 1. 요청한 url을 객체로 만들기 위해 url 모듈사용
var url = require('url');

// 2. 요청한 url중에 Query String을 객체로 만들기위해 querystring 모듈사용
var querystring = require('querystring');

var server = http.createServer(function(request, response){
    // 3. 콘솔화면에 로그 시작 부분을 출력
    console.log('--- log start ---');
    // 4. 브라우저에서 요청한 주소를 parsing 하여 객체화 후 출력
    var parsedUrl = url.parse(request.url);
    console.log(parsedUrl);
    // 5.객체화된 url중에 Query String 부분만 따로 객체화후 출력
    var parsedQuery = querystring.parse(parsedUrl.query, '&', '=');
    console.log(parsedQuery);
    // 6. 콘솔화면에 로그 종료 부분을 출력
    console.log('--- log end ---');

    response.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
        
    // response.end('var1의 값은 ' + parsedQuery.var1);
    var strVal1 = 'var1의 값은 ' + parsedQuery.var1;
        strVal1 = strVal1 + '<br/>var2의 값은 ' + parsedQuery.var2;
        strVal1 = strVal1 + '<br/>var3의 값은 ' + parsedQuery.var3;
    response.end(strVal1);

});

server.listen(8080, function(){
    console.log('Server is running...');
});

// 샘플 url : http://localhost:8080/?var1=newData&var2=153&var3=testdata2017