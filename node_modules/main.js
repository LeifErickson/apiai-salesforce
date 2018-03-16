var apiai = require('apiai');
 
var app = apiai("95253e503dce41a48184c12fa1048d44");
 
var request = app.textRequest('Get Started', {
    sessionId: '1486656220806'
});
 
request.on('response', function(response) {
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end();