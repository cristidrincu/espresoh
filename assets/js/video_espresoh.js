$(document).ready(function(){

    var videos_path = "movies/"

    //cache reference to movie container
    var movie_container = $('video#video_background');

    //cache reference to current movie
    var current_movie = $('video#video_background video').attr('src');
    var next_movie = null;

    //create array for movies and define path to containing folder
    var movie_path = "movies/";
    //var movies_chrome = ['source#movie2','source#movie3','source#movie4'];

    var movies_chrome = ['01.curte.mp4', '02.etaj_2.mp4', '03.etaj_3.mp4', '04.mansarda.mp4'];


    $(current_movie).animate({opacity:0.1});
    $(current_movie).fadeOut('slow');

    //randomize the movie that appears and change it every 5 seconds
    window.setInterval(function(){
        for(i=0;i<movies_chrome.length; i++){
           var index_movie = Math.floor((Math.random() * (movies_chrome.length-1))+1);
           console.log(index_movie);
           next_movie = $(movie_container).attr('src', movie_path+movies_chrome[index_movie]); //.hide().slideDown('fast');
           $(next_movie).animate({opacity: '1.0'}, 5000,'swing');
        }
    }, 20000);

});