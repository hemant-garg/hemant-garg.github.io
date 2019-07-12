// $(window).load(function() {

// });
$(document).ready(function() {
    alert("Website Under Construction !");        
}





    ///////////////////////////
    /// navigation menu open
    ///////////////////

    var navClose = true;

    $(".nav__button").on("click", function() {
        $(".nav__link--about").toggleClass("nav-button-open-about");
        $(".nav__link--port").toggleClass("nav-button-open-port");
        $(".nav__link--cover").toggleClass("nav-button-open-cover");
        // if (navClose) {
        $(".nav__button--icon").toggleClass("nav-menu-toggle");
        //     navClose = false;

        // } else {
        //     $(".nav__button--icon").css("transform", "translate(0rem, 0rem) rotate(0deg) scale(1)");
        //     navClose = true;
        // }
    });

    //////////////////////////////
    /////// ABOUT MENU OPEN
    //////////////// 

    $(".nav__link--about").on("click", function() {
        $(".pages--home, .pages--home > *").fadeOut(1000, function() {
            $(".pages--about").fadeIn();
            $(".nav__link--about").toggleClass("nav-button-open-about");
            $(".nav__link--port").toggleClass("nav-button-open-port");
            $(".nav__link--cover").toggleClass("nav-button-open-cover");
            $(".nav__button--icon").toggleClass("nav-menu-toggle");
            // $(".header--logo a, .header--logo span, .nav i").css("color", "#f7d794");
        });
    });


    ////////////////////////////////
    //// toggle about data
    /////////////////////////


    ///////////////
    // Initial conditions
    ///////
    $(".about__skills").hide();
    $(".about__toggle--info").addClass("toggle-active");

    ///////////////////////
    /// Toggle to INFO
    //////////////
    $(".about__toggle--info").on("click", function() {
        $(this).addClass("toggle-active");
        $(".about__toggle--skills").removeClass("toggle-active");
        $(".about__skills").slideUp(500, function() {
            $(".about__info").slideDown(500);
        });
    });

    ///////////////////////
    /// Toggle to SKILLS
    //////////////
    $(".about__toggle--skills").on("click", function() {
        $(this).addClass("toggle-active");
        $(".about__info").slideUp(500, function() {
            $(".about__skills").slideDown(500);
        });
        // $(".about__data, .about__data--main").css("background-color", "#444");

        $(".about__toggle--info").removeClass("toggle-active");
    });



    //////////////////////



});
