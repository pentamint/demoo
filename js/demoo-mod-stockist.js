( function ( $ ) {

$(document).ready(function() {
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
  });
} )( jQuery );
