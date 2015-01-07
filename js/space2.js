/**
 * Created by divya on 9/18/14.
 */
/**
 * Created by Admin on 9/8/14.
 */
var check=0;

$(document).ready(function(){


    $(".main").on("click",function(e){
        if($(e.target).is("button")){
            $(".main").css("transform","translateX(300px) scale(0.7) rotateY(-10deg)");
            $(".menu").css("transform","translateX(0)");
            $(".menu").css("opacity","1");
            check=1;

            console.log(check +" active");
        }
        else{
            $(".main").css("transform","translateX(0) scale(1) rotateY(0)");
            $(".menu").css("transform","translateX(-200px)");
            $(".menu").css("opacity","0");
            check=0;
        }




    })

    $(".exit").on("click",function(){
        $(".main").css("transform","translateX(0) scale(1) rotateY(0)");
        $(".menu").css("transform","translateX(-200px)");
        $(".menu").css("opacity","0");
        check=0;
    })




});