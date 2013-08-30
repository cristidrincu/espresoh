$(document).ready(function(){

    //cache reference to triger link and sub menu ABOUT US section
    var triggerLink = $('a#triggerSubMenu');
    var subMenu = $('div.containerSubMenu');

    //links in the main menu
    var linksMainMenu = $('div.container_main_menu ul li a');
    var activeLinkMainMenu = $('a.activeLinkMainMenu');

    //links in the sub menus - about us links and careers links
    var linksSubMenuAboutUs = $('div.containerSubMenu ul li a');
    var linksSubMenuCareers = $('div.containerSubMenuCareers ul li a');

    var activeLinkSubMenu = $('a.activeLinkSubMenu');

    //cache reference to trigger link and sub menu CAREERS section
    var triggerLinkCareers = $('a#triggerSubMenuCareers');
    var subMenuCareers = $('div.containerSubMenuCareers');

    var containerMenuLinks = $('div.containerSubMenu ul');

    //hide sub menu
    $(subMenu).hide();
    $(subMenuCareers).hide();

    //show sub menu on click + reposition the about us main div
    $(triggerLink).click(function(){
        $(subMenu).toggle('fast');

        //reset the activeLinkSubMenu
        $(activeLinkSubMenu).removeClass('activeLinkSubMenu');
        //repositioning of the div goes here
    });

    //show careers sub menu + reposition the careers main div
    $(triggerLinkCareers).click(function(){
        $(subMenuCareers).toggle('fast');

        //reset the activeLinkSubMenu
        $(activeLinkSubMenu).removeClass('activeLinkSubMenu');

        //repositioning of the div goes here
    });


    //main menu sections for main menu, toggle activeLink class
    $(linksMainMenu).bind('click', function(event){
        event.preventDefault();

        //check to see if About Us or Careers have a class of activeLinkMainMenu - if they do, remove it
        if($('a#triggerSubMenu').hasClass('activeLinkMainMenu') || $('a#triggerSubMenuCareers').hasClass('activeLinkMainMenu')){
            $('a#triggerSubMenu, a#triggerSubMenuCareers').removeClass('activeLinkMainMenu');
        }

        $currentLink = $(this);
        $(activeLinkMainMenu).removeClass('activeLinkMainMenu');
        $(this).addClass('activeLinkMainMenu');
        activeLinkMainMenu = $currentLink;

        $(linksSubMenuAboutUs).removeClass('activeLinkSubMenu');
        $(linksSubMenuCareers).removeClass('activeLinkSubMenu');
    });

    //sub menu sections for about us, toggle activeLinkSubMenu class
    $(linksSubMenuAboutUs).bind('click', function(event){
        event.preventDefault();

        $currentLink = $(this);
        $(activeLinkSubMenu).removeClass('activeLinkSubMenu');
        $(this).addClass('activeLinkSubMenu');
        activeLinkSubMenu = $currentLink;

        $('a#triggerSubMenu').addClass('activeLinkMainMenu');
        $('a#triggerSubMenuCareers').removeClass('activeLinkMainMenu');
    });

    //sub menu sections for careers, toggle activeLink class
    $(linksSubMenuCareers).bind('click', function(event){
        event.preventDefault();

        $currentLink = $(this);
        $(activeLinkSubMenu).removeClass('activeLinkSubMenu');
        $(this).addClass('activeLinkSubMenu');
        activeLinkSubMenu = $currentLink;

        $('a#triggerSubMenu').removeClass('activeLinkMainMenu');
        $('a#triggerSubMenuCareers').addClass('activeLinkMainMenu');
    });

    //events for buttons that represent STATS, WHAT WE DO, TEAM and OFFICE from the main ABOUT US page
    $('li#toggleStatsText').bind('click', function(){
        $('a#statsBtn').addClass('activeLinkSubMenu');
    });

    $('li#toggleWhatWeDoText').bind('click', function(){
        $('a#whatWeDoBtn').addClass('activeLinkSubMenu');

    });

    $('li#toggleTeamText').bind('click', function(){
         $('a#teamBtn').addClass('activeLinkSubMenu');
    });

    $('li#toggleOfficeText').bind('click', function(){
         $('a#officeBtn').addClass('activeLinkSubMenu');
    });


    //events for buttons that represent BENEFITS AND JOBS from the main CAREERS page
    $('li#toggleBenefitsText').bind('click', function(){
        $('a#benefitsButton').addClass('activeLinkSubMenu');
    });

    $('li#toggleJobsText').bind('click', function(){
        $('a#jobsButton').addClass('activeLinkSubMenu');
    });

    //event for arrow button that leads down to ABOUT US page
    $('img#arrow_nav_home_page').bind('click', function(){
        $(linksMainMenu).removeClass('activeLinkMainMenu');
        $('a#triggerSubMenu').addClass('activeLinkMainMenu');
        $(linksSubMenuAboutUs).removeClass('activeLinkSubMenu');
        $(linksSubMenuCareers).removeClass('activeLinkSubMenu');
    });
});