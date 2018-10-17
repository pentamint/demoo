( function ( $ ) {

  $(document).ready(function() {
    /* about-btn */
    var myEl = document.getElementById('menu-item-204821');
    myEl.addEventListener("click", myFunction);
    function myFunction(){
    	obj = document.getElementById('about');
    	objMo = document.getElementById('mo-about');
      mainHead = document.getElementById('main-header');
    	if(obj.style.display == "none"){
    		obj.style.display = "block";
        mainHead.style.zIndex = 1004;
    	} else{
    		obj.style.display = "none";
        mainHead.style.zIndex = 1003;
    	};
    	if(objMo.style.display == "none"){
    		objMo.style.display = "block";
        mainHead.style.zIndex = 1004;
    	} else{
    		objMo.style.display = "none";
        mainHead.style.zIndex = 1003;
    	};
    };
    myEl.onclick = myFunction();
  });

} )( jQuery );
