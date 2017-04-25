$('.cancel').click(function() {
  $(this).parent().parent().siblings('.dialog').toggle();
});

$('.btn-success').click(function() {
  $(this).closest('.mainCol').fadeOut(700, function() {
    $(this).remove();
  });
  $(this).closest('.dialog').toggle();
});
    
$('.btn-danger').click(function() {
  $(this).closest('.dialog').toggle();
});

$('.glyphicon-remove').click(function() {
  $(this).closest('.dialog').toggle();
});
