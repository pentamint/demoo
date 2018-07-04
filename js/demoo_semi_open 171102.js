<script>
//defence drag & select
window.document.onselectstart = new Function("return false");
window.document.ondragstart = new Function("return false");

//on/off about
var myEl = document.getElementById('menu-item-204821');
myEl.addEventListener("click", myFunction);
function myFunction(){
	obj = document.getElementById('about');
	objMo = document.getElementById('mo-about');
	if(obj.style.display == "none"){
		obj.style.display = "block";
	} else{
		obj.style.display = "none";
	};
	if(objMo.style.display == "none"){
		objMo.style.display = "block";
	} else{
		objMo.style.display = "none";
	};
};
myEl.onclick = myFunction();

//img slide setting
var getImgClass = document.getElementsByClassName('dp_oc_image_thumb')
for(var i=0; i<getImgClass.length; i++){
  var getSrc = getImgClass[i].src
  document.getElementsByClassName('dp_oc_item')[i].setAttribute('style','background-image:url(' + getSrc + ')')
}

//video-close
var closeEl = document.getElementById('close-btn');
closeEl.addEventListener("click", closeVideo);
function closeVideo(){
	VObj = document.getElementById('video-section');
	PObj = document.getElementById('collections-section');
	getBtn = document.getElementById('close-btn');
	if(VObj.style.display == "block"){
		document.getElementById("video-frame").contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}','*');
		VObj.style.display = "none";
		PObj.style.display = "block";
		getBtn.innerHTML = "View Video";
	} else{
		document.getElementById("video-frame").contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}','*');
		VObj.style.display = "block";
		PObj.style.display = "none";
		getBtn.innerHTML = "View Photo";
	}
}
closeEl.onclick = closeVideo();
</script>
