$(document).ready(function(){

    //cache icons about us
    var toggleStatsText = $("li#toggleStatsText");
    var toggleWhatWeDoText = $("li#toggleWhatWeDoText");
    var toggleTeamText = $("li#toggleTeamText");
    var toggleOfficeText = $("li#toggleOfficeText");

    //cache icons careers
    var toggleBenefitsText = $("li#toggleBenefitsText");
    var toggleJobsText = $("li#toggleJobsText");

    //cache text for each about us icon
    var statsText = $("li#textStats p");
    var whatWeDoText = $("li#textWhatWeDo p");
    var teamText = $("li#textTeam p");
    var officeText = $("li#textOffice p");

    //cache text for each careers icon
    var benefitsText = $("li#textBenefits p");
    var jobsText = $("li#textJobs p");

    var toggleText = function(toggler, textElement){
        $(toggler).hover(function(){
            $(textElement).fadeIn("fast").show();
        }, function(){
            $(textElement).fadeOut("fast");
        });
    }

    //toggle text for about us section
    toggleText($(toggleStatsText), $(statsText));
    toggleText($(toggleWhatWeDoText), $(whatWeDoText));
    toggleText($(toggleTeamText), $(teamText));
    toggleText($(toggleOfficeText), $(officeText));

    //toggle text for careers section
//    toggleText($(toggleBenefitsText), $(benefitsText));
//    toggleText($(toggleJobsText), $(jobsText));

});