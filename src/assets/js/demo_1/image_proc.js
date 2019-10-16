// In this javascript process fitting row to images.
function image_resize(img){
	img.onload = function(){
		this.style.width = "80%"
		this.style.height = "80%"
	}

}

function image_imshow(imName){
	//PATH in S3
	hardcoding_path = "insert path"
	img.src = hardcoding_path + imName

}

function import_thumbnail(imgList){
	image_folder = "../assets/clothes"
	var json_obj = JSON.parse(imgList)
	clothes = json_obj.clothes
	console.log(clothes)

}

function image_showing_onclick_event(){
	var img1 = document.getElementById("cloth_1")
	img1.src = "https://hjkim-clothing.s3.ap-northeast-2.amazonaws.com/Test/Pinstripe_000001.jpg"
	image_resize(img1)

}