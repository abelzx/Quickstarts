var https = require('https');

var options = {
  host: 'api.nexmo.com',
  path: '/verify/check/json',
  port: 443,
  method: 'POST',
  headers: {'Content-Type': 'application/json'}
}

var req = https.request(options);

req.write(JSON.stringify({
  api_key: API_KEY,
  api_secret: API_SECRET,
  request_id: '1b770a645f4b4c9fa5fddd21dcefe0d4',
  code: '2274'
}));

req.end();

var responseData = '';
req.on('response', function(res){
  res.on('data', function(chunk){
    responseData += chunk;
  });
  
  res.on('end', function(){
    console.log(JSON.parse(responseData));
  });
});
