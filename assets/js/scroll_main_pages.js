$(document).ready(function(){

    //default scroll top for container home page
    //$('div#home_page_container').animate({scrollTop:'150px'}, 1200, 'swing');

    var closeSubMenu = function(submenu){
            $(submenu).slideUp('fast');
    }

    var openSubMenu =function(submenu){
        $(submenu).slideDown('fast');
    }

   $("a#linkHomeSection").click(function(){
       closeSubMenu($("div.containerSubMenu, div.containerSubMenuCareers"));
       $('body, html').animate({scrollTop: "90px"}, 1200, "swing");
   });

    $("a#triggerSubMenu, img#arrow_nav_home_page").click(function(){
        openSubMenu($("div.containerSubMenu"));
        closeSubMenu($("div.containerSubMenuCareers"));
        $('body, html').animate({scrollTop: "900px"}, 1200, "swing");
    });

    $("a#triggerSubMenuCareers").click(function(){
        closeSubMenu($("div.containerSubMenu"));
        openSubMenu($("div.containerSubMenuCareers"))
        $('body,html').animate({scrollTop:"1700px"}, 1200, "swing");
    });

    $("a#linkContactSection").click(function(){
        closeSubMenu($("div.containerSubMenu"));
        closeSubMenu($("div.containerSubMenuCareers"));
        $('body,html').animate({scrollTop:"2500px"}, 1200, "swing");
    });
});