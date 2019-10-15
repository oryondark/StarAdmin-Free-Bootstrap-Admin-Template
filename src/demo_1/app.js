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
const multer = require('multer');
const storage = multer.diskStorage({
	destination: function(req, file, callback){
		callback(null, 'uploaded/');
	},
	filename: function(req, file, callback){
		callback(null, file.originalname);
	}
})
//const upload = multer({dest: "uploaded/"});
const upload = multer({storage:storage});
app.post('/upload_form', upload.single('fileUpload'), (req, res) => {
	testPython()
});

// python running code
// Step 1. install python-shell using npm.
// Step 2. call by reference of file name, but you should be acclimatized usage of this.
var pythonShell = require('python-shell');

var testPython = function(){
	var parameters = {
		mode: 'text',
		pythonPath: '/usr/bin/python3'
	}

	pythonShell.run('./test.py', option, function(err, res){
		console.log(err);
		console.log(res);
	})
}

