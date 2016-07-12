/*global $*/
$(function(){
  $('#send').click(function(e){
      e.preventDefault();
      $.ajax({
        url: "https://formspree.io/dimfit@gmail.com", 
        method: "POST",
        data: {
                name: $('#name').val(),
                email: $('#email').val(),
                subject: $('#subject').val(),
                rel: $('#rel').val(),
                message: $('#message').val(),
        },
        dataType: "json"
    }).done(function(){
        $('#form').html('<h1>Thank You</h1>');
    });
  });
});