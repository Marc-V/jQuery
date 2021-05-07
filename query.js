$(document).ready(function(){

    $("#btn-toggle").click(function(){
        $("h1").toggleClass("red");
        $("h2").toggleClass("blue");
    });


    $("#btn-addClass").click(function(){
        $("p").addClass("format");
    });



    $("#btn-hide").click(function(){
        $("#fourth").hide();
    });

    $("#btn-show").click(function(){
        $("#fourth").show();
    });


    $("#btn-olistu").click(function(){
        $("#order-list").slideUp();
    });

    $("#btn-olistd").click(function(){
        $("#order-list").slideDown();
    });


    $("#btn-ulist").click(function(){
        $("#unorder-list").slideToggle();
    });


    $("span").mouseenter(function(){
        $(".img").fadeOut();
    });

    $("span").mouseleave(function(){
        $(".img").fadeIn();
    });


    $("#btn-append").click(function(){
        $("#fourth-uno").append("<strong> I love this planet! I've got wealth, fame, and access to the depths os sleaze those things bring. </strong>");
    });


    $("#btn-kiss").click(function(){
        $(".img").before("<strong>Kiss my shiny metal #*@+!</strong>"); //ingresa parrafo antes de. (.after) después
    });


    $("#btn-sol").click(function(){
        $(".img").after("<strong>I told you!</strong>"); 
    });

    $("#btn-big").click(function(){
        $(".img").attr("width", "300");
    });


    $("em").mouseenter(function(){
        $("#art").text("Bender Doblador Rodríguez");
    });

    $("button").dblclick(function(){
        $("input:text").val("Phillip J. Fry");
    });

    $("span").dblclick(function(){
        alert($("#ben-der").html());
        
    });

});
