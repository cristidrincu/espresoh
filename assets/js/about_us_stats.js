$(document).ready(function(){

    var hovered = 0;

    $('div#boys_girls').hover(function(){

        hovered = 0;

        switchOpacity(hovered, elementsWithOpacity);

        $('div.teaser_text_stats').stop(true, true).animate({top:"-350px"}).fadeOut('fast');
        $('div#boys_girls div.top_icon').stop(true, true).animate({top:"-120px"},500, 'swing');
        $('div#boys_girls div.bottom_icon').stop(true, true).animate({bottom: "-200px"}, 500, 'swing');

        $('div#top_circle_boys').stop(true, true).animate({top:"-50px", opacity:'1.0'}, 500, 'swing').show();
        $('div#bottom_circle_boys').stop(true, true).animate({top:"140px", opacity:'1.0'}, 500, 'swing').show();

        $('img#elipse_common').stop(true, true).animate({width:"187px", height:"174px", opacity:'1.0'}, 500, 'swing').show();
        $('div#middle_circle_boys p#team_identifier').stop(true, true).animate({top:"75px", left:"65px", opacity:'1.0'}, 500, 'swing').show();

    },function(){

        hovered = 100;

        switchOpacity(hovered, elementsWithOpacity);

        $('div.teaser_text_stats').stop(true, true).animate({top:"-140px"}).fadeIn('fast').show();
        $('div#boys_girls div.top_icon').stop(true,true).animate({top:"0"}, 500, 'swing');
        $('div#boys_girls div.bottom_icon').stop(true, true).animate({bottom: "-35px"}, 500, 'swing');

        $('div#top_circle_boys').stop(true, true).animate({top:"-150px", opacity:'0.0'}, 500, 'swing').show();
        $('div#bottom_circle_boys').stop(true, true).animate({top:"300px", opacity:'0.0'}, 500, 'swing').show();

        $('img#elipse_common').stop(true, true).animate({width:"50px", height:"47px", opacity:'0.0'}, 500, 'swing').show();
        $('div#middle_circle_boys p#team_identifier').stop(true, true).animate({top:"140px", left:"165px", opacity:'0.0'}, 500, 'swing').show();
    });


    $('div#frontend_backend').hover(function(){

        hovered = 1;

        switchOpacity(hovered, elementsWithOpacity);

        $('div.teaser_text_stats').stop(true, true).animate({top:"-350px"}).fadeOut('fast');
        $('div#frontend_backend div.top_icon').stop(true, true).animate({top:"-120px"},500, 'swing').show();
        $('div#frontend_backend div.bottom_icon').stop(true, true).animate({bottom: "-200px"}, 500, 'swing').show();

        $('div#top_circle_backend').stop(true,true).animate({top:"-50px", opacity:"1.0"}, 500, 'swing').show();
        $('img#elipse_common_backend').stop(true, true).animate({width:"187px", height:"174px", opacity:'1.0'}, 500, 'swing').show();
        $('div#bottom_circle_frontend').stop(true,true).animate({top:"140px", opacity:"1.0"}, 500, 'swing').show();

        $('div#middle_circle_backend_frontend p#developers_identifier').stop(true, true).animate({top:"75px", left:"35px", opacity:'1.0'}, 500, 'swing').show();

    },function(){

        hovered = 100;

        switchOpacity(hovered, elementsWithOpacity);

        $('div.teaser_text_stats').stop(true, true).animate({top:"-140px"}).fadeIn('fast').show();
        $('div#frontend_backend div.top_icon').stop(true,true).animate({top:"0"}, 500, 'swing');
        $('div#frontend_backend div.bottom_icon').stop(true, true).animate({bottom: "-35px"}, 500, 'swing');

        $('div#top_circle_backend').stop(true,true).animate({top:"-150px", opacity:"0.0"}, 500, 'swing').show();
        $('img#elipse_common_backend').stop(true, true).animate({width:"50px", height:"47px", opacity:'0.0'}, 500, 'swing').show();
        $('div#bottom_circle_frontend').stop(true,true).animate({top:"300px", opacity:"0.0"}, 500, 'swing').show();

        $('div#middle_circle_backend_frontend p#developers_identifier').stop(true, true).animate({top:"75px", left:"35px", opacity:'0.0'}, 500, 'swing').show();

    });

    $('div#vehicles').hover(function(){

        hovered = 2;
        switchOpacity(hovered, elementsWithOpacity);

        $('div.teaser_text_stats').stop(true, true).animate({top:"-350px"}).fadeOut('fast');
        $('div#vehicles div.top_icon').stop(true, true).animate({top:"-120px"},500, 'swing');
        $('div#vehicles div.bottom_icon').stop(true, true).animate({bottom: "-200px"}, 500, 'swing');

        $('div#top_circle_vehicles').stop(true,true).animate({top:"-50px", opacity:"1.0"}, 500, 'swing').show();
        $('img#elipse_common_vehicles').stop(true, true).animate({width:"187px", height:"174px", opacity:'1.0'}, 500, 'swing').show();
        $('div#bottom_circle_vehicles').stop(true,true).animate({top:"140px", opacity:"1.0"}, 500, 'swing').show();

        $('div#middle_circle_vehicle p#vehicles_identifier').stop(true, true).animate({top:"75px", left:"50px", opacity:'1.0'}, 500, 'swing').show();
    },function(){

        hovered = 100;
        switchOpacity(hovered, elementsWithOpacity);

        $('div.teaser_text_stats').stop(true, true).animate({top:"-140px"}).fadeIn('fast').show();
        $('div#vehicles div.top_icon').stop(true,true).animate({top:"0"}, 500, 'swing');
        $('div#vehicles div.bottom_icon').stop(true, true).animate({bottom: "-35px"}, 500, 'swing');

        $('div#top_circle_vehicles').stop(true,true).animate({top:"-150px", opacity:"0.0"}, 500, 'swing').show();
        $('img#elipse_common_vehicles').stop(true, true).animate({width:"50px", height:"47px", opacity:'0.0'}, 500, 'swing').show();
        $('div#bottom_circle_vehicles').stop(true,true).animate({top:"300px", opacity:"0.0"}, 500, 'swing').show();

        $('div#middle_circle_vehicle p#vehicles_identifier').stop(true, true).animate({top:"75px", left:"35px", opacity:'0.0'}, 500, 'swing').show();

    });

    $('div#soda_coffee').hover(function(){

        hovered = 3;
        switchOpacity(hovered, elementsWithOpacity);

        $('div.teaser_text_stats').stop(true, true).animate({top:"-350px"}).fadeOut('fast');
        $('div#soda_coffee div.top_icon').stop(true, true).animate({top:"-120px"},500, 'swing');
        $('div#soda_coffee div.bottom_icon').stop(true, true).animate({bottom: "-200px"}, 500, 'swing');

        $('div#top_circle_soda_coffee').stop(true,true).animate({top:"-50px", opacity:"1.0"}, 500, 'swing').show();
        $('img#elipse_common_coffee_soda').stop(true, true).animate({width:"187px", height:"174px", opacity:'1.0'}, 500, 'swing').show();
        $('div#bottom_circle_soda_coffee').stop(true,true).animate({top:"140px", opacity:"1.0"}, 500, 'swing').show();

        $('div#middle_circle_soda_coffee p#coffee_soda_identifier').stop(true, true).animate({top:"75px", left:"40px", opacity:'1.0'}, 500, 'swing').show();


    },function(){

        hovered = 100;
        switchOpacity(hovered, elementsWithOpacity);

        $('div.teaser_text_stats').stop(true, true).animate({top:"-140px"}).fadeIn('fast').show();
        $('div#soda_coffee div.top_icon').stop(true,true).animate({top:"0"}, 500, 'swing');
        $('div#soda_coffee div.bottom_icon').stop(true, true).animate({bottom: "-35px"}, 500, 'swing');

        $('div#top_circle_soda_coffee').stop(true,true).animate({top:"-150px", opacity:"0.0"}, 500, 'swing').show();
        $('img#elipse_common_coffee_soda').stop(true, true).animate({width:"50px", height:"47px", opacity:'0.0'}, 500, 'swing').show();
        $('div#bottom_circle_soda_coffee').stop(true,true).animate({top:"300px", opacity:"0.0"}, 500, 'swing').show();

        $('div#middle_circle_soda_coffee p#coffee_soda_identifier').stop(true, true).animate({top:"75px", left:"35px", opacity:'0.0'}, 500, 'swing').show();

    });

    $('div#food').hover(function(){

        hovered = 4;
        switchOpacity(hovered, elementsWithOpacity);

        $('div.teaser_text_stats').stop(true, true).animate({top:"-350px"}).fadeOut('fast');
        $('div#food div.top_icon').stop(true, true).animate({top:"-120px"},500, 'swing');
        $('div#food div.bottom_icon').stop(true, true).animate({bottom: "-200px"}, 500, 'swing');

        $('div#top_circle_food').stop(true,true).animate({top:"-50px", opacity:"1.0"}, 500, 'swing').show();
        $('img#elipse_common_food').stop(true, true).animate({width:"187px", height:"174px", opacity:'1.0'}, 500, 'swing').show();
        $('div#bottom_circle_food').stop(true,true).animate({top:"140px", opacity:"1.0"}, 500, 'swing').show();

        $('div#middle_circle_food p#food_identifier').stop(true, true).animate({top:"75px", left:"22px", opacity:'1.0'}, 500, 'swing').show();
    },function(){

        hovered = 100;
        switchOpacity(hovered, elementsWithOpacity);

        $('div.teaser_text_stats').stop(true, true).animate({top:"-140px"}).fadeIn('fast').show();
        $('div#food div.top_icon').stop(true,true).animate({top:"0"}, 500, 'swing');
        $('div#food div.bottom_icon').stop(true, true).animate({bottom: "-35px"}, 500, 'swing');

        $('div#top_circle_food').stop(true,true).animate({top:"-150px", opacity:"0.0"}, 500, 'swing').show();
        $('img#elipse_common_food').stop(true, true).animate({width:"50px", height:"47px", opacity:'0.0'}, 500, 'swing').show();
        $('div#bottom_circle_food').stop(true,true).animate({top:"300px", opacity:"0.0"}, 500, 'swing').show();

        $('div#middle_circle_food p#food_identifier').stop(true, true).animate({top:"75px", left:"35px", opacity:'0.0'}, 500, 'swing').show();

    });

    $('div#work_play').hover(function(){

        hovered = 5;
        switchOpacity(hovered, elementsWithOpacity);

        $('div.teaser_text_stats').stop(true, true).animate({top:"-350px"}).fadeOut('fast');
        $('div#work_play div.top_icon').stop(true, true).animate({top:"-120px"},500, 'swing');
        $('div#work_play div.bottom_icon').stop(true, true).animate({bottom: "-200px"}, 500, 'swing');

        $('div#top_circle_work_play').stop(true,true).animate({top:"-50px", opacity:"1.0"}, 500, 'swing').show();
        $('img#elipse_work_play').stop(true, true).animate({width:"187px", height:"174px", opacity:'1.0'}, 500, 'swing').show();
        $('div#bottom_circle_work_play').stop(true,true).animate({top:"140px", opacity:"1.0"}, 500, 'swing').show();

        $('div#middle_circle_work_play p#work_play_identifier').stop(true, true).animate({top:"75px", left:"40px", opacity:'1.0'}, 500, 'swing').show();


    },function(){

        hovered = 100;
        switchOpacity(hovered, elementsWithOpacity);

        $('div.teaser_text_stats').stop(true, true).animate({top:"-140px"}).fadeIn('fast').show();
        $('div#work_play div.top_icon').stop(true,true).animate({top:"0"}, 500, 'swing');
        $('div#work_play div.bottom_icon').stop(true, true).animate({bottom: "-35px"}, 500, 'swing');

        $('div#top_circle_work_play').stop(true,true).animate({top:"-150px", opacity:"0.0"}, 500, 'swing').show();
        $('img#elipse_work_play').stop(true, true).animate({width:"50px", height:"47px", opacity:'0.0'}, 500, 'swing').show();
        $('div#bottom_circle_work_play').stop(true,true).animate({top:"300px", opacity:"0.0"}, 500, 'swing').show();

        $('div#middle_circle_work_play p#work_play_identifier').stop(true, true).animate({top:"75px", left:"35px", opacity:'0.0'}, 500, 'swing').show();

    });


    var elementsWithOpacity =[
        ['div#boys_girls div.top_icon', 'div#boys_girls div.bottom_icon'],
        ['div#frontend_backend div.top_icon', 'div#frontend_backend div.bottom_icon'],
        ['div#vehicles div.top_icon', 'div#vehicles div.bottom_icon'],
        ['div#soda_coffee div.top_icon', 'div#soda_coffee div.bottom_icon'],
        ['div#food div.top_icon','div#food div.bottom_icon'],
        ['div#work_play div.top_icon', 'div#work_play div.bottom_icon']
    ];

    console.log(elementsWithOpacity.length);

    var switchOpacity = function(flag, elementsArray){
        //there is at least a previous item before the one we hover on;
        var previousItems=0;
        switch(flag){
            //sets all elements opacity value to 1
            case 100:
                for(i=0;i<elementsArray.length;i++){
                    for(j=0;j<elementsArray.length; j++){
                        $(elementsArray[i][j]).stop(true, true).animate({opacity: "1.0"});
                    }
                }
            break;
            case 0:
                for(i=1;i<elementsArray.length;i++){
                    for(j=0;j<elementsArray.length; j++){
                        $(elementsArray[i][j]).stop(true, true).animate({opacity: "0.2"});
                    }
                }
            break;
            case 1:
                for(i=2;i<elementsArray.length;i++){
                    for(j=0;j<elementsArray.length; j++){
                        $(elementsArray[i][j]).stop(true, true).animate({opacity: "0.2"});
                        $(elementsArray[0][j]).stop(true, true).animate({opacity: "0.2"});
                    }
                }
            break;
            case 2:
                for(i=3;i<elementsArray.length;i++){
                    for(j=0;j<elementsArray.length; j++){
                        $(elementsArray[i][j]).stop(true, true).animate({opacity: "0.2"});

                        $(elementsArray[1][j]).stop(true, true).animate({opacity: "0.2"});
                        $(elementsArray[0][j]).stop(true, true).animate({opacity: "0.2"});
                    }
                }
            break;
            case 3:
                for(i=4;i<elementsArray.length;i++){
                    for(j=0;j<elementsArray.length; j++){
                        $(elementsArray[i][j]).stop(true, true).animate({opacity: "0.2"});

                        $(elementsArray[2][j]).stop(true, true).animate({opacity: "0.2"});
                        $(elementsArray[1][j]).stop(true, true).animate({opacity: "0.2"});
                        $(elementsArray[0][j]).stop(true, true).animate({opacity: "0.2"});
                    }
                }
            break;
            case 4:
                for(i=5;i<elementsArray.length;i++){
                    for(j=0;j<elementsArray.length; j++){
                        //this references the elements from index 4 upwards
                        $(elementsArray[i][j]).stop(true, true).animate({opacity: "0.2"});

                        //this reference the elements from index4 downwards
                        $(elementsArray[3][j]).stop(true, true).animate({opacity: "0.2"});
                        $(elementsArray[2][j]).stop(true, true).animate({opacity: "0.2"});
                        $(elementsArray[1][j]).stop(true, true).animate({opacity: "0.2"});
                        $(elementsArray[0][j]).stop(true, true).animate({opacity: "0.2"});
                    }
                }
            break;
            case 5:
                for(i=0;i<elementsArray.length; i++){
                    $(elementsArray[4][i]).stop(true, true).animate({opacity: "0.2"});
                    $(elementsArray[3][i]).stop(true, true).animate({opacity: "0.2"});
                    $(elementsArray[2][i]).stop(true, true).animate({opacity: "0.2"});
                    $(elementsArray[1][i]).stop(true, true).animate({opacity: "0.2"});
                    $(elementsArray[0][i]).stop(true, true).animate({opacity: "0.2"});
                }

                break;
        }
    }
});