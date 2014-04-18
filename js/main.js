//Custom JavaScript for the Menu Toggle 
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
    $('#page-content-overlay').fadeToggle();
});

function verticalize() {
    $('v-center').height(function() {
        return $(this).prev().height();
    });
}

$(window).on('resize', function() {
    verticalize();
});


$(window).on('load', function() {
   verticalize(); 
    $('.calendarSpace').clndr();
    $('a').smoothScroll();
});