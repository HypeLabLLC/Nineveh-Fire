//Custom JavaScript for the Menu Toggle 
$("#menu-toggle, #page-content-overlay").click(function(e) {
    e.preventDefault();
    $("#wrapper, html").toggleClass("active");
    $('#page-content-overlay, .emergency-icons').toggleClass("active");
    $('#page-content-overlay').fadeToggle();
});

function verticalize() {
    $('.v-center').height(function() {
        return $(this).prev().height();
    });
}

$(window).on('resize', function() {
    verticalize();
    $('.headshot>img').height(function() {
      return $(this).width();
    });
    if ($('.sidebar-contact').position().top < 500)
      $('.sidebar-contact').css({position: 'static'});
});


window.onload = function() {
   verticalize();
    $('.headshot>img').width('200px').height(function() {
      return $(this).width();
    });
    if ($('.sidebar-contact').position().top < 500)
      $('.sidebar-contact').css({position: 'static'});
    $('.calendarSpace').clndr();
    $('a').smoothScroll();
};