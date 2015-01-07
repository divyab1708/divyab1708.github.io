/**
 * Created by Amritansh on 12/19/2014.
 */
$(document).ready(function(){

    $(".searchTextA").on("click",function(e){
        e.preventDefault();
        console.log("hello");
        /*$(".searchText").css("display","none");*/
        $(".searchNow").addClass("expand");


    });

    $(".titleBlock").on("click", function () {
        /*alert("hello")*/
       /* $(this).addClass("titleBlockTurn");
        $(this).next().addClass("contentBlockTurn");*/
        $(this).addClass("changeTitleBlock");
        /*$(this).css("margin-left", "90%");*/

        $(this).parent().addClass("showContent");
    });


    $(".contentBlock").on("click", function () {
        /*alert("hello")*/
        /* $(this).addClass("titleBlockTurn");
         $(this).next().addClass("contentBlockTurn");*/
        /*$(this).prev().css("margin-left", "0");*/
        $(this).prev().removeClass("changeTitleBlock");
        $(this).parent().removeClass("showContent");
    })
});