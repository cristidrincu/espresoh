$(document).ready(function(){

    //cache main elements that need to be hidden once a button from the sub-menu gets clicked
    var mainContentAboutUs = $('div#mainContentAboutUs');
    var containerPhotoGalleryOffice = $('div#officePhotoGalleryContainer');

    //cache buttons from about us sub menu
    var officeBtn = $('a#officeBtn');

    //cache buttons that are icons in the About us section
    var officeIcon = $('li#toggleOfficeText');


    //defaul behaviour for hidden containers belonging to sub-menu buttons
    $(containerPhotoGalleryOffice).hide();

    //reset the main elements that appear when About Us is clicked whenever another button from the main menu is clicked
    $('a#linkHomeSection, a#triggerSubMenuCareers, a#linkContactSection').click(function(){
        mainContentAboutUs.fadeIn('fast').show();
        containerPhotoGalleryOffice.fadeOut('fast');
    });

    //trigger the office sub-section of the ABOUT US section
    $('a#officeBtn, li#toggleOfficeText').click(function(event){
        event.preventDefault();
        mainContentAboutUs.fadeOut('fast');
        containerPhotoGalleryOffice.fadeIn('fast');
    });
});