$(document).ready(function(){

    //cache reference to triger link and sub menu
    var triggerLink = $('a#triggerSubMenu');
    var subMenu = $('div.containerSubMenu');

    var containerMenuLinks = $('div.containerSubMenu ul');

    //hide sub menu
    $(subMenu).hide();

    //show sub menu on click
    $(triggerLink).click(function(){
        $(subMenu).toggle('fast');
    });

});