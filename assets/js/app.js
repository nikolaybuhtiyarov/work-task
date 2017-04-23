$('.cancel').click(function() {
  $('.dialog').addClass("visible");
});



$('.btn-success').on('click',function(event) {
    $(this).parents('.mainCol').remove();
    $('.dialog').toggleClass("visible");
    event.stopPropagation();
});


    
$('.btn-danger').click(function() {
    $('.dialog').toggleClass("visible");
});

