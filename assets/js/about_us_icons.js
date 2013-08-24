$(document).ready(function(){

    //cache icons

    var toggleStatsText = $("li#toggleStatsText");
    var toggleWhatWeDoText = $("li#toggleWhatWeDoText");
    var toggleTeamText = $("li#toggleTeamText");
    var toggleOfficeText = $("li#toggleOfficeText");

    var statsText = $("li#textStats p");
    var whatWeDoText = $("li#textWhatWeDo p");
    var teamText = $("li#textTeam p");
    var officeText = $("li#textOffice p");

    var toggleText = function(toggler, textElement){
        $(toggler).hover(function(){
            $(textElement).fadeIn("fast").show();
        }, function(){
            $(textElement).fadeOut("fast");
        });
    }

    toggleText($(toggleStatsText), $(statsText));
    toggleText($(toggleWhatWeDoText), $(whatWeDoText));
    toggleText($(toggleTeamText), $(teamText));
    toggleText($(toggleOfficeText), $(officeText));

});