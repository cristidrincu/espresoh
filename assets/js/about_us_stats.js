$(document).ready(function(){
    $('div#boys_girls').hover(function(){
        $('div.teaser_text_stats').stop(true, true).animate({top:"-350px"}).fadeOut('fast');
        $('div#boys_girls div.top_icon').stop(true, true).animate({top:"-120px"},500, 'swing');
        $('div#boys_girls div.bottom_icon').stop(true, true).animate({bottom: "-200px"}, 500, 'swing');

        $('div#top_circle_boys').stop(true, true).animate({top:"-50px", opacity:'1.0'}, 500, 'swing').show();
        $('div#middle_circle_boys').stop(true, true).fadeIn('fast').show();
        $('div#bottom_circle_boys').stop(true, true).animate({top:"140px", opacity:'1.0'}, 500, 'swing').show();

        $('img#elipse_common').stop(true, true).animate({width:"187px", height:"174px"}, 500, 'swing').show();
        $('div#middle_circle_boys p#team_identifier').stop(true, true).animate({top:"75px", left:"65px"}, 500, 'swing').show();

    },function(){
        $('div.teaser_text_stats').stop(true, true).animate({top:"-140px"}).fadeIn('fast').show();
        $('div#boys_girls div.top_icon').stop(true,true).animate({top:"0"}, 500, 'swing');
        $('div#boys_girls div.bottom_icon').stop(true, true).animate({bottom: "-35px"}, 500, 'swing');

        $('div#top_circle_boys').stop(true, true).animate({top:"-150px", opacity:'0.0'}, 500, 'swing').show();
        $('div#middle_circle_boys').stop(true, true).fadeOut('fast').show();
        $('div#bottom_circle_boys').stop(true, true).animate({top:"300px", opacity:'0.0'}, 500, 'swing').show();

        $('img#elipse_common').stop(true, true).animate({width:"50px", height:"47px"}, 500, 'swing').show();
        $('div#middle_circle_boys p#team_identifier').stop(true, true).animate({top:"140px", left:"165px"}, 500, 'swing').show();
    });


    $('div#frontend_backend').hover(function(){
        $('div.teaser_text_stats').stop(true, true).animate({top:"-350px"}).fadeOut('fast');
        $('div#frontend_backend div.top_icon').stop(true, true).animate({top:"-120px"},500, 'swing');
        $('div#frontend_backend div.bottom_icon').stop(true, true).animate({bottom: "-200px"}, 500, 'swing');


    },function(){
        $('div.teaser_text_stats').stop(true, true).animate({top:"-140px"}).fadeIn('fast').show();
        $('div#frontend_backend div.top_icon').stop(true,true).animate({top:"0"}, 500, 'swing');
        $('div#frontend_backend div.bottom_icon').stop(true, true).animate({bottom: "-35px"}, 500, 'swing');

    });

    $('div#vehicles').hover(function(){
        $('div.teaser_text_stats').stop(true, true).animate({top:"-350px"}).fadeOut('fast');
        $('div#vehicles div.top_icon').stop(true, true).animate({top:"-120px"},500, 'swing');
        $('div#vehicles div.bottom_icon').stop(true, true).animate({bottom: "-200px"}, 500, 'swing');


    },function(){
        $('div.teaser_text_stats').stop(true, true).animate({top:"-140px"}).fadeIn('fast').show();
        $('div#vehicles div.top_icon').stop(true,true).animate({top:"0"}, 500, 'swing');
        $('div#vehicles div.bottom_icon').stop(true, true).animate({bottom: "-35px"}, 500, 'swing');

    });

    $('div#soda_coffee').hover(function(){
        $('div.teaser_text_stats').stop(true, true).animate({top:"-350px"}).fadeOut('fast');
        $('div#soda_coffee div.top_icon').stop(true, true).animate({top:"-120px"},500, 'swing');
        $('div#soda_coffee div.bottom_icon').stop(true, true).animate({bottom: "-200px"}, 500, 'swing');


    },function(){
        $('div.teaser_text_stats').stop(true, true).animate({top:"-140px"}).fadeIn('fast').show();
        $('div#soda_coffee div.top_icon').stop(true,true).animate({top:"0"}, 500, 'swing');
        $('div#soda_coffee div.bottom_icon').stop(true, true).animate({bottom: "-35px"}, 500, 'swing');

    });

    $('div#food').hover(function(){
        $('div.teaser_text_stats').stop(true, true).animate({top:"-350px"}).fadeOut('fast');
        $('div#food div.top_icon').stop(true, true).animate({top:"-120px"},500, 'swing');
        $('div#food div.bottom_icon').stop(true, true).animate({bottom: "-200px"}, 500, 'swing');


    },function(){
        $('div.teaser_text_stats').stop(true, true).animate({top:"-140px"}).fadeIn('fast').show();
        $('div#food div.top_icon').stop(true,true).animate({top:"0"}, 500, 'swing');
        $('div#food div.bottom_icon').stop(true, true).animate({bottom: "-35px"}, 500, 'swing');

    });

    $('div#work_play').hover(function(){
        $('div.teaser_text_stats').stop(true, true).animate({top:"-350px"}).fadeOut('fast');
        $('div#work_play div.top_icon').stop(true, true).animate({top:"-120px"},500, 'swing');
        $('div#work_play div.bottom_icon').stop(true, true).animate({bottom: "-200px"}, 500, 'swing');


    },function(){
        $('div.teaser_text_stats').stop(true, true).animate({top:"-140px"}).fadeIn('fast').show();
        $('div#work_play div.top_icon').stop(true,true).animate({top:"0"}, 500, 'swing');
        $('div#work_play div.bottom_icon').stop(true, true).animate({bottom: "-35px"}, 500, 'swing');

    });
});