$(document).ready(function(){

    //cache main elements that need to be hidden once a button from the sub-menu gets clicked
    var mainContentAboutUs = $('div#mainContentAboutUs');
    var containerPhotoGalleryOffice = $('div#officePhotoGalleryContainer');
    var containerStats = $('div#statsContainer');

    //cache buttons from about us sub menu
    var officeBtn = $('a#officeBtn');

    //cache buttons that are icons in the About us section
    var officeIcon = $('li#toggleOfficeText');

    var statsBtn = $('a#statsBtn');
    var statsBtnIcon = $('li#toggleStatsText');


    //defaul behaviour for hidden containers belonging to sub-menu buttons
    $(containerStats).hide();
    $(containerPhotoGalleryOffice).hide();

    //reset the main elements that appear when About Us is clicked whenever another button from the main menu is clicked
    $('a#linkHomeSection, a#triggerSubMenuCareers, a#linkContactSection').click(function(){
        $(mainContentAboutUs).fadeIn('fast').show();
        $(containerPhotoGalleryOffice).fadeOut('fast');
        $(containerStats).fadeOut('fast');
    });

    //trigger the STATS sub-section of the ABOUT US SECTIONS
    $('a#statsBtn, li#toggleStatsText').bind('click', function(event){
        event.preventDefault();
        mainContentAboutUs.fadeOut('fast');
        $(containerStats).fadeIn('fast');
        $(containerPhotoGalleryOffice).hide();
    });

    //trigger the office sub-section of the ABOUT US section
    $('a#officeBtn, li#toggleOfficeText').bind('click',function(event){
        event.preventDefault();
        mainContentAboutUs.fadeOut('fast');
        containerPhotoGalleryOffice.fadeIn('slow');
        $(containerStats).hide();
    });
});