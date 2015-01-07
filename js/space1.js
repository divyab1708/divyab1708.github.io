/**
 * Created by Admin on 9/8/14.
 */
var check=0;

$(document).ready(function(){


    $(".main").on("click",function(e){
        if($(e.target).is("button")){
        $(".main").css("transform","translateX(300px) scale(0.7)");
        $(".menu").css("transform","translateX(0)");
        $(".menu").css("opacity","1");
        check=1;

            console.log(check +" active");
        }
        else{
            $(".main").css("transform","translateX(0) scale(1)");
            $(".menu").css("transform","translateX(-200px)");
            $(".menu").css("opacity","0");
            check=0;
        }




    })

    $(".exit").on("click",function(){
        $(".main").css("transform","translateX(0) scale(1)");
        $(".menu").css("transform","translateX(-200px)");
        $(".menu").css("opacity","0");
        check=0;
    })




});