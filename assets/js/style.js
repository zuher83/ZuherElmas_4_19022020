$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox({
        alwaysShowClose: true,
        showArrows: true,
    });
});

// $(document).ready(function () {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 20) {
//             $('#toTopBtn').fadeIn();
//         } else {
//             $('#toTopBtn').fadeOut();
//         }
//     });

//     $('#toTopBtn').click(function () {
//         $("html, body").animate({
//             scrollTop: 0
//         }, 1000);
//         return false;
//     });
// });


// $(document).on('click', '#toTopBtn', function(event) {

//     var target = $( $(this).attr('href') );

//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top
//         }, 500);
//     }

// });