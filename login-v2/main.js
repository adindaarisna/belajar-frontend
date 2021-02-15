$('.toggler-signup').click(function(){
  $('.body.signup-wrap').hide();
  $('.body.login-wrap').show();  
});
$('.toggler-login').click(function(){
  $('.signup-wrap').hide(); 
  $('.login-wrap').show(); 
});