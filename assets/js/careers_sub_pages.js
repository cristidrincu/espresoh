$(document).ready(function(){
   $('div#jobs_container').hide();

    //cache reference to jobs elements
    var parentContainerCareers = $('div#careers_parent');
    var containerJobs = $('div#jobs_container');

    var jobsBtn = $('a#jobsButton');
    var jobsBtnIcon = $('li#toggleJobsText');

    $(jobsBtn).bind('click', function(event){
        event.preventDefault();
        $(parentContainerCareers).hide();
        $(containerJobs).stop(true, true).fadeIn('fast').show();

        //reset the what we do scrolling div to the initial position of the first element
        $('div#whatWeDoContainer').stop(true, true).animate({left: $('div#march2012_may2012').position().left});
    });

    $(jobsBtnIcon).bind('click', function(){
        $(parentContainerCareers).hide();
        $(containerJobs).fadeIn('fast').show();

        //reset the what we do scrolling div to the initial position of the first element
        $('div#whatWeDoContainer').stop(true, true).animate({left: $('div#march2012_may2012').position().left});
    });


    //clicking on another menu button will reset the elements
    $('a#linkHomeSection, a#triggerSubMenu, a#statsBtn, a#whatWeDoBtn, a#teamBtn, a#officeBtn, a#linkContactSection').bind('click', function(event){
        $(parentContainerCareers).fadeIn('fast').show();
        $(containerJobs).hide();

        //reset the what we do scrolling div to the initial position of the first element
        $('div#whatWeDoContainer').stop(true, true).animate({left: $('div#march2012_may2012').position().left});
    });
});