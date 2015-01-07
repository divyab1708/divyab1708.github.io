/**
 * Created by divya on 11/3/14.
 */
$(document).ready(function(){

    $(".rot").on("click",function(){
        $(this).css("transform","rotate(-90deg) translate(208px) rotate(90deg)");
        $(".rot1").css("transform","rotate(-180deg) translate(208px) rotate(180deg)");
        $(".rot2").css("transform","rotate(-360deg) translate(208px) rotate(360deg)");

        $(".content").children().css("display","none");
        $(".chop").css("display","block");

       /* var id1=$(this).attr("id");
        $(this).addClass("nine");

        if(id1==3){
            id1=1;
        }
        else
            id1++;
        $("#"+id1).addClass("nine1");

        if(id1==3){
            id1=1;
        }
        else
        id1++;

        $("#"+id1).addClass("nine2");*/


    })


    $(".rot1").on("click",function(){
        $(this).css("transform","rotate(-90deg) translate(208px) rotate(90deg)");
        $(".rot2").css("transform","rotate(-180deg) translate(208px) rotate(180deg)");
        $(".rot").css("transform","rotate(0deg) translate(208px) rotate(0deg)");

        $(".content").children().css("display","none");
        $(".paradise").css("display","block");

        /* var id1=$(this).attr("id");
         $(this).addClass("nine");

         if(id1==3){
         id1=1;
         }
         else
         id1++;
         $("#"+id1).addClass("nine1");

         if(id1==3){
         id1=1;
         }
         else
         id1++;

         $("#"+id1).addClass("nine2");*/


    })

    $(".rot2").on("click",function(){
        $(this).css("transform","rotate(-90deg) translate(208px) rotate(90deg)");
        $(".rot").css("transform","rotate(180deg) translate(208px) rotate(-180deg)");
        $(".rot1").css("transform","rotate(0deg) translate(208px) rotate(0deg)");
        $(".content").children().css("display","none");
        $(".just").css("display","block");

        /* var id1=$(this).attr("id");
         $(this).addClass("nine");

         if(id1==3){
         id1=1;
         }
         else
         id1++;
         $("#"+id1).addClass("nine1");

         if(id1==3){
         id1=1;
         }
         else
         id1++;

         $("#"+id1).addClass("nine2");*/


    })




})