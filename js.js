
// (function($) {
//   $(function() {
//     $("div.card-nav").on("click", "div.card-nav__elements:not(.active)", function() {
//       $(this)
//         .addClass("active")
//         .siblings()
//         .removeClass("active")
//         .closest("div.card")
//         .find("div.main")
//         .removeClass("active")
//         .eq($(this).index())
//         .addClass("active");
//     });
//   });
// })(jQuery);

$(function(){
    $("#btn1").click(function(){ 
        $(this).css('background-color', 'red');
        alert('Мир jQuery');
    });
});