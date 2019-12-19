express = require('express');
exec = require('child_process').exec;

exec('json-server --watch --host mobix-react-redux.herokuapp.com --delay 3000 ./server/api.json --port 80', function(req, res, next) {
    console.log(req);
});