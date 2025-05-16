$(function(){
    // jQueryを記述
    $("a").hover(function() {
        $(this).css("color", "#00ff00");
    }, function() {
        // $(this).css("color", #ff0000);
        $(this).css("fonSize", "24px");
    });
});