express = require('express');
exec = require('child_process').exec;

exec('json-server --watch --host 127.0.0.1 --delay 3000 ./server/api.json --port 80', function(req, res, next) {
    console.log(req);
});