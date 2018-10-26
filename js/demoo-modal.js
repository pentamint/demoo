( function ( $ ) {

  $(document).ready(function() {
    /* about-btn */
    var myEl = document.getElementById('menu-item-204821');
    myEl.addEventListener("click", myFunction);
    function myFunction(){
    	obj = document.getElementById('about');
    	objMo = document.getElementById('mo-about');
      mainHead = document.getElementById('main-header');
      aboutsection = document.getElementById('about-section');
    	if(obj.style.display == "none"){
    		obj.style.display = "block";
        mainHead.style.zIndex = 1004;
        aboutsection.style.display = "block";
    	} else{
    		obj.style.display = "none";
        mainHead.style.zIndex = 1003;
        aboutsection.style.display = "none";
    	};
    	if(objMo.style.display == "none"){
    		objMo.style.display = "block";
        mainHead.style.zIndex = 1004;
        aboutsection.style.display = "block";
    	} else{
    		objMo.style.display = "none";
        mainHead.style.zIndex = 1003;
        aboutsection.style.display = "none";
    	};
    };
    myEl.onclick = myFunction();
  });

} )( jQuery );
