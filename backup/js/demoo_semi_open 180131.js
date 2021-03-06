<script>

/* defense drag & select */
window.document.onselectstart = new Function("return false");
window.document.ondragstart = new Function("return false");

/* img slide setting */
var getImgClass = document.getElementsByClassName('dp_oc_image_thumb');
var getItem = document.getElementsByClassName('dp_oc_item');
for(var i=0; i<getImgClass.length; i++){
  var getSrc = getImgClass[i].src;
  getItem[i].setAttribute('style','background-image:url(' + getSrc + ')');
  getItem[i].setAttribute('id','no' + i);
};
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
  		document.getElementById("video-frame").pause();
  		VObj.style.display = "none";
  		getBtn.innerHTML = "open";
  	} else{
  		document.getElementById("video-frame").load();
  		VObj.style.display = "block";
  		getBtn.innerHTML = "close";
  	}
  }
  closeEl.onclick = closeVideo();
}

/* stockist setting */
window.$ = jQuery;
/* text fold */
  $('h5[class^="foldBtn"]').on('click', function(){
    var Btn = $("." + ($(this).attr("class")).replace('Btn',''));
    $(Btn).toggleClass('folded');
  })

/* stockist lightbox */
  $(".lightbox-module").on('click', function(){
    $(this).css('display', 'none');
  });
  //dome
  $('span[id^="lightbox-btn-"]').on('click', function dome(){
    var obj2 = $("#" + ($(this).attr("id")).replace('-btn-', '-dome-'));
    var objFrame2 = $("#" + ($(this).attr("id")).replace('-btn-', '-dome-') + " iframe");
    var dispVal2 = "none";
    $('.lightbox-module').css('display', dispVal2);
    if($(obj2).css("display") != "block"){
      $(obj2).css('display','block');
      if($(objFrame2).attr('src') == undefined){
        $(objFrame2).attr('src', $(this).attr('data-url'));
      }
      dispVal2 = "block";
    };
  });
  // global
  $('span[id^="lightbox-btn-g"]').on('click', function global(){
    var obj = $("#" + ($(this).attr("id")).replace('-btn-g', '-glob-'));
    var objFrame = $("#" + ($(this).attr("id")).replace('-btn-g', '-glob-') + " iframe");
    var dispVal = "none";
    $('.lightbox-module').css('display', dispVal);
    if($(obj).css("display") != "block"){
      $(obj).css('display','block');
      if($(objFrame).attr('src') == undefined){
        $(objFrame).attr('src', $(this).attr('data-url'));
      }
      dispVal = "block";
    };
  });

  // var getSlide = document.getElementsByClassName('owl-carousel');
  // getSlide[0].setAttribute('data-rotate', 'off');
</script>
