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
});