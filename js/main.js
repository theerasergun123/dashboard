$(".home").click(function(){
    $(".home").addClass("active");
    $(".dashboard").removeClass("active");
})
$(".dashboard").click(function(){
    $(".dashboard").addClass("active");
    $(".home").removeClass("active");
})