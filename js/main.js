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
    $('.headshot>img').height(function() {
      return $(this).width();
    });
});


window.onload = function() {
   verticalize(); 
    $('.headshot>img').width('200px');
    $('.calendarSpace').clndr();
    $('a').smoothScroll();
};