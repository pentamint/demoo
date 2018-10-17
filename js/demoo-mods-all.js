( function ( $ ) {

$(document).ready(function() {
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

// collection section jump protect
var owlStg = $('.owl-carousel');
if( owlStg != null) {
setTimeout(function(){
    owlStg.css('opacity', '1')
}, 1);
}
// var getSlide = document.getElementsByClassName('owl-carousel');
// getSlide[0].setAttribute('data-rotate', 'off');
});
} )( jQuery );
