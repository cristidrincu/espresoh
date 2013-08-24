$(document).ready(function(){

    var closeSubMenu = function(submenu){
            $(submenu).slideUp('fast');
    }

   $("a#linkHomeSection").click(function(){
       closeSubMenu($("div.containerSubMenu"));
       $('body').animate({scrollTop: "100px"}, 1500, "swing");

   });

    $("a#triggerSubMenu, img#arrow_nav_home_page").click(function(){
        $('body').animate({scrollTop: "1000px"}, 1500, "swing");
    });
});