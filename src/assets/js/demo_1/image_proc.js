// In this javascript process fitting row to images.
function image_resize(img){
	img.onload = function(){
		this.style.width = "80%";
		this.style.height = "80%";
	}

}

function image_imshow(imName){
	//PATH in S3
	hardcoding_path = "insert path";
	img.src = hardcoding_path + imName;

}

function preview_load(img){
	var list = document.getElementById("preview");
	child = list.lastElementChild;
	while(child){
		list.removeChild(child);
		child = list.lastElementChild;
	}

	path = img.src;
	front = "<img src='"
	back = "' with='200' height='450' display='block' text-align='center'/> "
	var prev_img = $(front+path+back);
	prev_img.appendTo("#preview")
}

function thumbnail_append(path){
	//<div><img data-u="image" src="image1.jpg" /></div>

	front = "<div class='verticalBlock'><img src='";
	back = "' width='140' height='250' onclick='preview_load(this)'/></div>";
	var thum_img = $(front+path+back);
	thum_img.appendTo('#clothesList');
}

function import_patternImage(imgList){
	var img = document.getElementById("patternImg");
	if (img.getAttribute('src') == null){
		img.setAttribute('src', imgList);
	}
}

function import_thumbnail(imgList){
	console.log(imgList);
	var list = document.getElementById("clothesList");
	child = list.lastElementChild;
	while(child){
		list.removeChild(child);
		child = list.lastElementChild;
	}

	image_folder = "../assets/clothes/";
	var json_obj = JSON.parse(imgList);
	clothes = json_obj.clothes;
	import_patternImage(json_obj.patternimg);
	console.log(clothes)

	for ( key in clothes){
		value = clothes[key].split("\\");
		full_path = image_folder + value[0] + "/" + value[1];
		thumbnail_append(full_path);
	}

}

function image_showing_onclick_event(){
	var img1 = document.getElementById("cloth_1");
	img1.src = "https://hjkim-clothing.s3.ap-northeast-2.amazonaws.com/Test/Pinstripe_000001.jpg";
	image_resize(img1);

}