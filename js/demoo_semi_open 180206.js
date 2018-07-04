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
  mainHead = document.getElementById('main-header');
	if(obj.style.display == "none"){
		obj.style.display = "block";
    mainHead.style.zIndex = 1003;
	} else{
		obj.style.display = "none";
    mainHead.style.zIndex = 998;
	};
	if(objMo.style.display == "none"){
		objMo.style.display = "block";
    mainHead.style.zIndex = 1003;
	} else{
		objMo.style.display = "none";
    mainHead.style.zIndex = 998;
	};
};
myEl.onclick = myFunction();


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
        $('.owl-item').css('marginRight','0')
    	} else{
    		document.getElementById("video-frame").load();
    		VObj.style.display = "block";
    		getBtn.innerHTML = "close";
        $('.owl-item').css('marginRight','')
    	}
    }
    closeEl.onclick = closeVideo();
    $(window).resize(function() {
      VObj.style.display = "block";
      getBtn.innerHTML = "close";
      $('.owl-item').css('marginRight','')
    });
  }
  // var getSlide = document.getElementsByClassName('owl-carousel');
  // getSlide[0].setAttribute('data-rotate', 'off');
</script>
