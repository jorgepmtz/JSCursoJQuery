'use strict';
$(document).ready(function(){
  
  var caxa = $('#id_caja')
  $('#id_mostrar').hide();
    
  $('#id_mostrar').click(function(){
    $(this).hide();
    $('#id_ocultar').show();
    //caxa.show('fast');
    //caxa.fadeIn('slow');
    caxa.fadeTo('slow', 0.9);
    
  });
  
  $('#id_ocultar').click(function(){
    $(this).hide();
    $('#id_mostrar').show();
    //caxa.hide('fast');
    //caxa.fadeOut('slow');
    caxa.fadeTo('slow', 0.1);

  });



}); // -------- ++++++++++++++ FIN de $(document).ready +++++++++++++++++ ------------