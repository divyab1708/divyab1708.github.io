/**
 * Created by Amritansh on 1/6/2015.
 */
$(document).ready(function(){

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

});