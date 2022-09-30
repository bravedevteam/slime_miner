$(function(){
  // 팝업
  $(".open--popup").click(function(){
    var target = $(this).attr("data-pop");
    $(".popBasic").hide();
    $("#"+target).css("display", "flex");
    $("html").css("overflow", "hidden");
  });

  $(".close--popup").click(function(){
    $(this).parents(".popBasic").hide();
    $("html").css("overflow", "auto");
  });

  $("#btnGnb").click(function(){
    if($(this).hasClass("is--open")){
      $(this).removeClass("is--open");
      $("#aside").removeClass("is--open");
      $("html").css("overflow", "auto");
    }else{
      $(this).addClass("is--open");
      $("#aside").addClass("is--open");
      $("html").css("overflow", "hidden");
    }
  });

  function gnbSet(){
    var win_w = $(window).width();
    
    if(767 < win_w){
      $("#btnGnb").removeClass("is--open");
      $("#aside").removeClass("is--open");
    }

    $("html").css("overflow", "auto");
  };
  
  gnbSet();

  $(window).resize(function(){
    gnbSet();
  });
});