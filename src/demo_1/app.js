var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join("/home/ubuntu/StarAdmin-Free-Bootstrap-Admin-Template/src/demo_1" + '/index.html'));
});
app.use('/static', express.static("/home/ubuntu/StarAdmin-Free-Bootstrap-Admin-Template/src/demo_1/."));
app.listen(3000);