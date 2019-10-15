var express = require('express');
var app = express();
var path = require('path');
// viewed at http://localhost:8080

app.get('/', function(req, res) {
    res.sendFile(path.join("/home/ubuntu/StarAdmin-Free-Bootstrap-Admin-Template/src/demo_1" + '/index.html'));
});
app.use(express.static("/home/ubuntu/StarAdmin-Free-Bootstrap-Admin-Template/src/demo_1/."));
app.use("/assets", express.static("/home/ubuntu/StarAdmin-Free-Bootstrap-Admin-Template/src/assets"));
app.listen(3000);

// file uploader using multer
// Step 1. npm install multer
// step 2. instance obejct for mutler.
// step 3. monitor post method using app.post, running uploader front to backend if a user requests to you web.
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, 'uploaded/');
    },
    filename: function (request, file, callback) {
        console.log(file);
        callback(null, file.originalname)
    }
});
var upload = multer({storage: storage});

app.post('/upload_form', upload.single('photo'), (req, res) => {
	console.log(req.file);
	console.log(req.files);
	console.log(req.body);
	res.status(204).end()
});

