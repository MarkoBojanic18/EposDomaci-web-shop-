$(document).ready(function () {


    $(".clickme").click(function () {
alert("Kliknuli ste");
    });


$("h1").dblclick(function () {
    alert("dupli klik");
});


$("input").focus(function() {
   $("#name").css("border", "10px  solid  red" );
});




});

$(function () {
    $("img").hover(
        function () {
        $(this).animate({"opacity": "0"}, 500);
       }, 
       function(){
           $(this).animate({"opacity": "1"}, 500);
    });
});