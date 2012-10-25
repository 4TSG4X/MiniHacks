 var http = require('http');

 http.createServer(function(request, response) {
 	var options = {
 			method: 'GET'
 		, host: 'www.google.com'
 		, port: 80
 		, path: request.url
 	};

   var proxyRequest = http.request(options);
   
   proxyRequest.on('response', function (proxyResponse) {
     proxyResponse.pipe(response);
   });
   
   proxyRequest.end();
 }).listen(8080);