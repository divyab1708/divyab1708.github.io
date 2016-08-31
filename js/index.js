/**
 * Created by Amritansh on 1/6/2015.
 */
$(document).ready(function(){
    var rotate=0;

    /*$(".diamond").on("mouseenter",function(){

        $(this).find("img").addClass("rotateImage");
    });

    $(".diamond").on("mouseleave",function(){
        $(this).find("img").removeClass("rotateImage");

    })*/

    $(".first1").children().on("mouseenter",function(){
        $(this).find(".diamond").addClass("first1diamond");
        $(this).find(".diamond").find("img").addClass("rotateImage");
    });

    $(".first1").children().on("mouseleave",function(){
        $(this).find(".diamond").removeClass("first1diamond");
        $(this).find(".diamond").find("img").removeClass("rotateImage");
    })

    $(".second1").children().on("mouseenter",function(){
        $(this).find(".diamond").addClass("second1diamond");
        $(this).find(".diamond").find("img").addClass("rotateImage");
    });

    $(".second1").children().on("mouseleave",function(){
        $(this).find(".diamond").removeClass("second1diamond");
        $(this).find(".diamond").find("img").removeClass("rotateImage");
    })


    $(".next").on("click",function(){

        if(rotate==0){
            $(".outerCircle").css("transform","rotate(-180deg)");
            rotate=1;
            $(".next").attr("disabled");
            $(".prev").removeAttr("disabled");
        }

    })

    $(".prev").on("click",function(){

        if(rotate==1){
            $(".outerCircle").css("transform","rotate(0deg)");
            rotate=0;
            $(".prev").attr("disabled");
            $(".next").removeAttr("disabled");
        }

    })


    $(".posterPortfolio").on("click","a",function () {
        var posterNum= +$(this).data("poster");
        $("#posterGalleryModal").find(".active").removeClass("active");
        $("#poster-carousel").find(".carousel-inner").find(".item:nth-child("+ posterNum+")").addClass("active");
        //alert(posterNum);
    })

    $(".sideNavBar").on("click","a",function (e) {

        $(".glyphicon-star").removeClass("glyphicon-star").addClass("glyphicon-star-empty");
        $(this).removeClass("glyphicon-star-empty").addClass("glyphicon-star");

        var targetDiv=$(this).attr("href");
        $('html, body').animate({
            scrollTop: $(targetDiv).offset().top
        }, 2000);

        e.preventDefault();
    })

    var distance1 = $('#sec1').offset().top;
    var distance2 = $('#sec2').offset().top;
    var distance3 = $('#sec3').offset().top;
    var distance4 = $('#sec4').offset().top;
        $window = $(window);

    $window.scroll(function() {
        if ( $window.scrollTop() >= distance1 && $window.scrollTop()< distance2) {
            $(".glyphicon-star").removeClass("glyphicon-star").addClass("glyphicon-star-empty");
            $(".sideNavBar").find("a:nth-child(1)").removeClass("glyphicon-star-empty").addClass("glyphicon-star");
            // console.log("sec1");
        }
        else if ( $window.scrollTop() >= distance2 && $window.scrollTop()< distance3) {
            $(".glyphicon-star").removeClass("glyphicon-star").addClass("glyphicon-star-empty");
            $(".sideNavBar").find("a:nth-child(2)").removeClass("glyphicon-star-empty").addClass("glyphicon-star");
            // console.log("sec2");
        }
        else if ( $window.scrollTop() >= distance3 && $window.scrollTop()< distance4-400) {
            $(".glyphicon-star").removeClass("glyphicon-star").addClass("glyphicon-star-empty");
            $(".sideNavBar").find("a:nth-child(3)").removeClass("glyphicon-star-empty").addClass("glyphicon-star");
            // console.log("sec3");
        }
        else if ( $window.scrollTop() >= distance4-400 ) {
            $(".glyphicon-star").removeClass("glyphicon-star").addClass("glyphicon-star-empty");
            $(".sideNavBar").find("a:nth-child(4)").removeClass("glyphicon-star-empty").addClass("glyphicon-star");
            // console.log("sec4");
            //alert("hi");
        }
    });

});