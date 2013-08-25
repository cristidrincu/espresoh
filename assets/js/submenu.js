$(document).ready(function(){

    //cache reference to triger link and sub menu ABOUT US section
    var triggerLink = $('a#triggerSubMenu');
    var subMenu = $('div.containerSubMenu');

    //cache reference to trigger link and sub menu CAREERS section
    var triggerLinkCareers = $('a#triggerSubMenuCareers');
    var subMenuCareers = $('div.containerSubMenuCareers');

    var containerMenuLinks = $('div.containerSubMenu ul');

    //hide sub menu
    $(subMenu).hide();
    $(subMenuCareers).hide();

    //show sub menu on click
    $(triggerLink).click(function(){
        $(subMenu).toggle('fast');
    });

    $(triggerLinkCareers).click(function(){
        $(subMenuCareers).toggle('fast');
    });

});