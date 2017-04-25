$('.cancel').click(function() {
  $(this).parent().siblings('.dialog').toggle();
});

$('.btn-success').click(function() {
  $(this).closest('.mainCol').fadeOut(500, function(){
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
