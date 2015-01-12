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

});