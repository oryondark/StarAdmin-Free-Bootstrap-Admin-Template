var express = require('express');
var app = express();
var path = require('path');
const saveFolder = 'uploaded/'

// viewed at http://localhost:8080

app.get('/', function(req, res) {
    res.sendFile(path.join("/home/ubuntu/StarAdmin-Free-Bootstrap-Admin-Template/src/demo_1" + '/template.html'));
});
app.use(express.static("/home/ubuntu/StarAdmin-Free-Bootstrap-Admin-Template/src/demo_1/."));
app.use("/assets", express.static("/home/ubuntu/StarAdmin-Free-Bootstrap-Admin-Template/src/assets"));
app.listen(80);


// file uploader using multer
// Step 1. npm install multer
// step 2. instance obejct for mutler.
// step 3. monitor post method using app.post, running uploader front to backend if a user requests to you web.
const multer = require('multer');

const storage = multer.diskStorage({
	destination: function(req, file, callback){
		callback(null, saveFolder);
	},
	filename: function(req, file, callback){
		callback(null, file.originalname);
	}
})

function on_console_log(data){
	console.log(data.toString())
}


//const upload = multer({dest: "uploaded/"});
// if you errors then install 'npm install --save isomorphic-fetch es6-promise'.
// Multer supports upload file easy.
// Step 1. install multer module.
// Step 2. bind to attribute is 'name' of file tag in HTML markup.
// for example ) if you set file tag such as 'upload_form', your post parameter must be binded it.
// Step 3. using storage meta for multer.
const upload = multer({storage:storage});
app.post('/upload_form', upload.single('fileUpload'), function(req, res) {
	//res.send('success');
	var features;
	var ret;
	fileName = req.file.originalname
	const { spawn } = require('child_process');
	const cmd = spawn('/usr/bin/python3', ['../assets/knn_module/inference.py', saveFolder+fileName])
	cmd.stdout.on('data', (data) => {
		ret = `data : ${data}`
		console.log(ret)
		res.send(data);
		console.log("success")
	});
	cmd.stderr.on('data', (data) => {
		console.log(`err : ${data}`);
	});
	cmd.on('close', (code) => {
		console.log(`existed code : ${code}`);
	});
	
});
