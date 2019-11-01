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

function thumbnail_append(path, num){
	//<img id="thumb_1" src="" alt="Image 1">
	const id = "thumb_" + num.toString();
	var tag = document.getElementById(id);
	tag.src = path;
}

//****
// 입력한 패턴이미지 보여주기
function import_patternImage(imgList){
	var img = document.getElementById("patternImg");
	if (img.getAttribute('src') == null){
		img.setAttribute('src', imgList);
	} else {
		img.setAttribute('src',imgList);
	}
}

// 썸네일 보여주기
function import_thumbnail(imgList){
	console.log(imgList);


	image_folder = "../assets/clothes/";
	var json_obj = JSON.parse(imgList);
	clothes = json_obj.clothes;
	import_patternImage(json_obj.patternimg);
	console.log(clothes);
	num = 0;
	for ( key in clothes){
		num = num + 1;
		value = clothes[key].split("\\");
		full_path = image_folder + value[0] + "/" + value[1];
		thumbnail_append(full_path, num);
		console.log(full_path);
	}

}
//****


function image_showing_onclick_event(){
	var img1 = document.getElementById("cloth_1");
	img1.src = "https://hjkim-clothing.s3.ap-northeast-2.amazonaws.com/Test/Pinstripe_000001.jpg";
	image_resize(img1);

}