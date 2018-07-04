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

/* */
window.$ = jQuery;
  $('h5.foldBtn1').on('click', function(){
    $( 'p.fold1' ).toggleClass('folded');
  });
  $('h5.foldBtn2').on('click', function(){
    $( 'p.fold2' ).toggleClass('folded');
  });
  $('h5.foldBtn3').on('click', function(){
    $( 'p.fold3' ).toggleClass('folded');
  });
  $('h5.foldBtn4').on('click', function(){
    $( 'p.fold4' ).toggleClass('folded');
  });
/* stockist lightbox */
  $(".lightbox-module").on('click', function(){
    $(this).css('display', 'none');
  });
  $("#lightbox-btn-g1").on('click', function(){
    if($("#lightbox-glob-1").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-1").css('display', 'block');
    }
  });
  $("#lightbox-btn-g2").on('click', function(){
    if($("#lightbox-glob-2").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-2").css('display', 'block');
    }
  });
  $("#lightbox-btn-g3").on('click', function(){
    if($("#lightbox-glob-3").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-3").css('display', 'block');
    }
  });
  $("#lightbox-btn-g4").on('click', function(){
    if($("#lightbox-glob-4").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-4").css('display', 'block');
    }
  });
  $("#lightbox-btn-g5").on('click', function(){
    if($("#lightbox-glob-5").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-5").css('display', 'block');
    }
  });
  $("#lightbox-btn-g6").on('click', function(){
    if($("#lightbox-glob-6").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-6").css('display', 'block');
    }
  });
  $("#lightbox-btn-g7").on('click', function(){
    if($("#lightbox-glob-7").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-7").css('display', 'block');
    }
  });
  $("#lightbox-btn-g8").on('click', function(){
    if($("#lightbox-glob-8").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-8").css('display', 'block');
    }
  });
  $("#lightbox-btn-g9").on('click', function(){
    if($("#lightbox-glob-9").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-9").css('display', 'block');
    }
  });
  $("#lightbox-btn-g10").on('click', function(){
    if($("#lightbox-glob-10").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-10").css('display', 'block');
    }
  });
  $("#lightbox-btn-g11").on('click', function(){
    if($("#lightbox-glob-11").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-11").css('display', 'block');
    }
  });
  $("#lightbox-btn-g12").on('click', function(){
    if($("#lightbox-glob-12").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-12").css('display', 'block');
    }
  });
  $("#lightbox-btn-g13").on('click', function(){
    if($("#lightbox-glob-13").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-13").css('display', 'block');
    }
  });
  $("#lightbox-btn-g14").on('click', function(){
    if($("#lightbox-glob-14").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-14").css('display', 'block');
    }
  });
  $("#lightbox-btn-g15").on('click', function(){
    if($("#lightbox-glob-15").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-15").css('display', 'block');
    }
  });
  $("#lightbox-btn-g16").on('click', function(){
    if($("#lightbox-glob-16").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-16").css('display', 'block');
    }
  });
  $("#lightbox-btn-g17").on('click', function(){
    if($("#lightbox-glob-17").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-17").css('display', 'block');
    }
  });
  $("#lightbox-btn-g18").on('click', function(){
    if($("#lightbox-glob-18").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-18").css('display', 'block');
    }
  });
  $("#lightbox-btn-g19").on('click', function(){
    if($("#lightbox-glob-19").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-19").css('display', 'block');
    }
  });
  $("#lightbox-btn-g20").on('click', function(){
    if($("#lightbox-glob-20").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-20").css('display', 'block');
    }
  });
  $("#lightbox-btn-g21").on('click', function(){
    if($("#lightbox-glob-21").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-21").css('display', 'block');
    }
  });
  $("#lightbox-btn-g22").on('click', function(){
    if($("#lightbox-glob-22").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-22").css('display', 'block');
    }
  });
  $("#lightbox-btn-g23").on('click', function(){
    if($("#lightbox-glob-23").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-23").css('display', 'block');
    }
  });
  $("#lightbox-btn-g24").on('click', function(){
    if($("#lightbox-glob-24").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-24").css('display', 'block');
    }
  });
  $("#lightbox-btn-g25").on('click', function(){
    if($("#lightbox-glob-25").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-25").css('display', 'block');
    }
  });
  $("#lightbox-btn-g26").on('click', function(){
    if($("#lightbox-glob-26").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-26").css('display', 'block');
    }
  });
  $("#lightbox-btn-g27").on('click', function(){
    if($("#lightbox-glob-27").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-27").css('display', 'block');
    }
  });
  $("#lightbox-btn-g28").on('click', function(){
    if($("#lightbox-glob-28").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-28").css('display', 'block');
    }
  });
  $("#lightbox-btn-g29").on('click', function(){
    if($("#lightbox-glob-29").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-29").css('display', 'block');
    }
  });
  $("#lightbox-btn-g30").on('click', function(){
    if($("#lightbox-glob-30").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-30").css('display', 'block');
    }
  });
  $("#lightbox-btn-g31").on('click', function(){
    if($("#lightbox-glob-31").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-31").css('display', 'block');
    }
  });
  $("#lightbox-btn-g32").on('click', function(){
    if($("#lightbox-glob-32").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-32").css('display', 'block');
    }
  });
  $("#lightbox-btn-g33").on('click', function(){
    if($("#lightbox-glob-33").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-33").css('display', 'block');
    }
  });
  $("#lightbox-btn-g34").on('click', function(){
    if($("#lightbox-glob-34").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-34").css('display', 'block');
    }
  });
  $("#lightbox-btn-g35").on('click', function(){
    if($("#lightbox-glob-35").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-35").css('display', 'block');
    }
  });
  $("#lightbox-btn-g36").on('click', function(){
    if($("#lightbox-glob-36").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-36").css('display', 'block');
    }
  });
  $("#lightbox-btn-g37").on('click', function(){
    if($("#lightbox-glob-37").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-37").css('display', 'block');
    }
  });
  $("#lightbox-btn-g38").on('click', function(){
    if($("#lightbox-glob-38").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-38").css('display', 'block');
    }
  });
  $("#lightbox-btn-g39").on('click', function(){
    if($("#lightbox-glob-39").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-39").css('display', 'block');
    }
  });
  $("#lightbox-btn-g40").on('click', function(){
    if($("#lightbox-glob-40").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-40").css('display', 'block');
    }
  });
  $("#lightbox-btn-g41").on('click', function(){
    if($("#lightbox-glob-41").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-41").css('display', 'block');
    }
  });
  $("#lightbox-btn-g42").on('click', function(){
    if($("#lightbox-glob-42").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-42").css('display', 'block');
    }
  });
  $("#lightbox-btn-g43").on('click', function(){
    if($("#lightbox-glob-43").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-43").css('display', 'block');
    }
  });
  $("#lightbox-btn-g44").on('click', function(){
    if($("#lightbox-glob-44").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-44").css('display', 'block');
    }
  });
  $("#lightbox-btn-g45").on('click', function(){
    if($("#lightbox-glob-45").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-45").css('display', 'block');
    }
  });
  $("#lightbox-btn-g46").on('click', function(){
    if($("#lightbox-glob-46").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-46").css('display', 'block');
    }
  });
  $("#lightbox-btn-g47").on('click', function(){
    if($("#lightbox-glob-47").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-47").css('display', 'block');
    }
  });
  $("#lightbox-btn-g48").on('click', function(){
    if($("#lightbox-glob-48").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-48").css('display', 'block');
    }
  });
  $("#lightbox-btn-g49").on('click', function(){
    if($("#lightbox-glob-49").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-49").css('display', 'block');
    }
  });
  $("#lightbox-btn-g50").on('click', function(){
    if($("#lightbox-glob-50").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-50").css('display', 'block');
    }
  });
  $("#lightbox-btn-g51").on('click', function(){
    if($("#lightbox-glob-51").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-glob-51").css('display', 'block');
    }
  });
  $("#lightbox-btn-1").on('click', function(){
    if($("#lightbox-dome-1").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-1").css('display', 'block');
    }
  });
  $("#lightbox-btn-2").on('click', function(){
    if($("#lightbox-dome-2").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-2").css('display', 'block');
    }
  });
  $("#lightbox-btn-3").on('click', function(){
    if($("#lightbox-dome-3").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-3").css('display', 'block');
    }
  });
  $("#lightbox-btn-4").on('click', function(){
    if($("#lightbox-dome-4").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-4").css('display', 'block');
    }
  });
  $("#lightbox-btn-5").on('click', function(){
    if($("#lightbox-dome-5").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-5").css('display', 'block');
    }
  });
  $("#lightbox-btn-6").on('click', function(){
    if($("#lightbox-dome-6").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-6").css('display', 'block');
    }
  });
  $("#lightbox-btn-7").on('click', function(){
    if($("#lightbox-dome-7").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-7").css('display', 'block');
    }
  });
  $("#lightbox-btn-8").on('click', function(){
    if($("#lightbox-dome-8").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-8").css('display', 'block');
    }
  });
  $("#lightbox-btn-9").on('click', function(){
    if($("#lightbox-dome-9").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-9").css('display', 'block');
    }
  });
  $("#lightbox-btn-10").on('click', function(){
    if($("#lightbox-dome-10").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-10").css('display', 'block');
    }
  });
  $("#lightbox-btn-11").on('click', function(){
    if($("#lightbox-dome-11").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-11").css('display', 'block');
    }
  });
  $("#lightbox-btn-12").on('click', function(){
    if($("#lightbox-dome-12").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-12").css('display', 'block');
    }
  });
  $("#lightbox-btn-13").on('click', function(){
    if($("#lightbox-dome-13").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-13").css('display', 'block');
    }
  });
  $("#lightbox-btn-14").on('click', function(){
    if($("#lightbox-dome-14").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-14").css('display', 'block');
    }
  });
  $("#lightbox-btn-15").on('click', function(){
    if($("#lightbox-dome-15").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-15").css('display', 'block');
    }
  });
  $("#lightbox-btn-16").on('click', function(){
    if($("#lightbox-dome-16").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-16").css('display', 'block');
    }
  });
  $("#lightbox-btn-17").on('click', function(){
    if($("#lightbox-dome-17").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-17").css('display', 'block');
    }
  });
  $("#lightbox-btn-18").on('click', function(){
    if($("#lightbox-dome-18").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-18").css('display', 'block');
    }
  });
  $("#lightbox-btn-19").on('click', function(){
    if($("#lightbox-dome-19").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-19").css('display', 'block');
    }
  });
  $("#lightbox-btn-20").on('click', function(){
    if($("#lightbox-dome-20").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-20").css('display', 'block');
    }
  });
  $("#lightbox-btn-21").on('click', function(){
    if($("#lightbox-dome-21").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-21").css('display', 'block');
    }
  });
  $("#lightbox-btn-22").on('click', function(){
    if($("#lightbox-dome-22").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-22").css('display', 'block');
    }
  });
  $("#lightbox-btn-23").on('click', function(){
    if($("#lightbox-dome-23").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-23").css('display', 'block');
    }
  });
  $("#lightbox-btn-24").on('click', function(){
    if($("#lightbox-dome-24").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-24").css('display', 'block');
    }
  });
  $("#lightbox-btn-25").on('click', function(){
    if($("#lightbox-dome-25").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-25").css('display', 'block');
    }
  });
  $("#lightbox-btn-26").on('click', function(){
    if($("#lightbox-dome-26").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-26").css('display', 'block');
    }
  });
  $("#lightbox-btn-27").on('click', function(){
    if($("#lightbox-dome-27").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-27").css('display', 'block');
    }
  });
  $("#lightbox-btn-28").on('click', function(){
    if($("#lightbox-dome-28").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-28").css('display', 'block');
    }
  });
  $("#lightbox-btn-29").on('click', function(){
    if($("#lightbox-dome-29").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-29").css('display', 'block');
    }
  });
  $("#lightbox-btn-30").on('click', function(){
    if($("#lightbox-dome-30").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-30").css('display', 'block');
    }
  });
  $("#lightbox-btn-31").on('click', function(){
    if($("#lightbox-dome-31").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-31").css('display', 'block');
    }
  });
  $("#lightbox-btn-32").on('click', function(){
    if($("#lightbox-dome-32").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-32").css('display', 'block');
    }
  });
  $("#lightbox-btn-33").on('click', function(){
    if($("#lightbox-dome-33").css('display') == "block"){
      $('.lightbox-module').css('display', 'none');
    } else {
      $('.lightbox-module').css('display', 'none');
      $("#lightbox-dome-33").css('display', 'block');
    }
  });
  // var getSlide = document.getElementsByClassName('owl-carousel');
  // getSlide[0].setAttribute('data-rotate', 'off');
</script>
