//console.log(process.env);
//console.log(process.argv);
//console.log(process.pid);
//console.log(process.title);
//console.log(process.uptime());
//console.log(process.memoryusage);
//console.log(process.cwd);
//console.log('Host' + os.hostname());
var request = require('request');
var stream = request('http://www.google.com');
stream.on('data', function (chunk) {
    console.log("chunk->>" + chunk);
});