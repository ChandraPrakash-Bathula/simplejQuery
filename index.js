// $("button").click(function(){
//     $("h1").css("color","purple");
// });


// $("input").keydown(function(event){
//     $("h1").text(event.key);
// });


$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({margin : "20%"});
});
// $("h1").before("<button>NEW</button>");
// $("h1").after("<button>NEW</button>");