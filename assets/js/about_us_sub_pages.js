$(document).ready(function(){

    //cache main elements that need to be hidden once a button from the sub-menu gets clicked
    var mainContentAboutUs = $('div#mainContentAboutUs');
    var containerWhatWeDo = $('div#parent_container_what_we_do');
    var containerStats = $('div#statsContainer');
    var containerPhotoGalleryOffice = $('div#officePhotoGalleryContainer');


    //cache buttons from about us sub menu
    var officeBtn = $('a#officeBtn');

    //cache buttons that are icons in the About us section
    var officeIcon = $('li#toggleOfficeText');

    var statsBtn = $('a#statsBtn');
    var statsBtnIcon = $('li#toggleStatsText');

    var whatWeDoBtn = $('a#whatWeDoBtn');


    //defaul behaviour for hidden containers belonging to sub-menu buttons
    $(containerWhatWeDo).hide();
    $(containerStats).hide();
    $(containerPhotoGalleryOffice).hide();

    //reset the main elements that appear when About Us is clicked whenever another button from the main menu is clicked
    $('a#linkHomeSection, a#triggerSubMenuCareers, a#linkContactSection').click(function(){
        $(mainContentAboutUs).fadeIn('fast').show();

        $(containerWhatWeDo).fadeOut('fast');
        $(containerStats).fadeOut('fast');
        $(containerPhotoGalleryOffice).fadeOut('fast');

        //reset the what we do scrolling div to the initial position of the first element
        $('div#whatWeDoContainer').stop(true, true).animate({left: $('div#march2012_may2012').position().left});
    });

    //trigger the STATS sub-section of the ABOUT US SECTION
    $('a#statsBtn, li#toggleStatsText').bind('click', function(event){
        event.preventDefault();
        $(mainContentAboutUs).fadeOut('fast');
        $(containerStats).fadeIn('fast');

        $(containerWhatWeDo).hide();
        $(containerPhotoGalleryOffice).hide();

        //reset the what we do scrolling div to the initial position of the first element
        $('div#whatWeDoContainer').stop(true, true).animate({left: $('div#march2012_may2012').position().left});
    });

    //trigger the WHAT WE DO sub-section of the ABOUT US SECTION
    $('a#whatWeDoBtn, li#toggleWhatWeDoText').bind('click', function(event){
        event.preventDefault();
        $(mainContentAboutUs).fadeOut('fast');
        $(containerWhatWeDo).fadeIn('fast').show();

        $(containerStats).hide();
        $(containerPhotoGalleryOffice).hide();

        //reset the what we do scrolling div to the initial position of the first element
        $('div#whatWeDoContainer').stop(true, true).animate({left: $('div#march2012_may2012').position().left});
    });

    //trigger the office sub-section of the ABOUT US section
    $('a#officeBtn, li#toggleOfficeText').bind('click',function(event){
        event.preventDefault();
        $(mainContentAboutUs).fadeOut('fast');
        $(containerPhotoGalleryOffice).fadeIn('slow');

        $(containerWhatWeDo).fadeOut('fast').hide();
        $(containerStats).hide();

        //reset the what we do scrolling div to the initial position of the first element
        $('div#whatWeDoContainer').stop(true, true).animate({left: $('div#march2012_may2012').position().left});
    });
});