<script>
/* defense drag & select */
window.document.onselectstart = new Function("return false");
window.document.ondragstart = new Function("return false");

/* img slide setting */
var getImgClass = document.getElementsByClassName('dp_oc_image_thumb')
for(var i=0; i<getImgClass.length; i++){
  var getSrc = getImgClass[i].src;
  document.getElementsByClassName('dp_oc_item')[i].setAttribute('style','background-image:url(' + getSrc + ')')
}
if (document.getElementById('sslookbook2018') != null) {
  document.getElementById('sslookbook2018').getElementsByClassName('dp_oc_item')[29].style.backgroundPosition = '80%';
}
/* about-btn */
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

/* video-btn */
var closeEl = document.getElementById('close-btn');
if( closeEl != null){
  closeEl.addEventListener("click", closeVideo);
  function closeVideo(){
  	VObj = document.getElementById('video-section');
  	getBtn = document.getElementById('close-btn');
  	if(VObj.style.display == "block"){
  		document.getElementById("video-frame").contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}','*');
  		VObj.style.display = "none";
  		getBtn.innerHTML = "open";
  	} else{
  		document.getElementById("video-frame").contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}','*');
  		VObj.style.display = "block";
  		getBtn.innerHTML = "close";
  	}
  }
  closeEl.onclick = closeVideo();
};

/* stockist lightbox */
function viewinfo(){
  var getLB = document.getElementById('lightbox-module');
  if(getLB.style.opacity == "0"){
    getLB.style.opacity = "1";
  } else {
    getLB.style.opacity = "0";
  };
}
var getLBbtn = document.getElementById("lightbox-btn");
getLBbtn.addEventListener("click", viewinfo);
getLBbtn.onclick = viewinfo()
</script>
