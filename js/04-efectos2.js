'use strict';
$(document).ready(function(){
  
  var caxa = $('#id_caja')
  $('#id_mostrar').hide();
    
  $('#id_mostrar').click(function(){
    $(this).hide();
    $('#id_ocultar').show();
    //caxa.show('fast');
    //caxa.fadeIn('slow');
    caxa.slideDown('slow');
    
  });
  
  $('#id_ocultar').click(function(){
    $(this).hide();
    $('#id_mostrar').show();
    //caxa.hide('fast');
    //caxa.fadeOut('slow');
    caxa.slideUp('slow', function(){
      console.log('Cartel oculto!');
    });

  });

  $('#id_animar').click(function(){
    caxa.animate({
                  marginLeft: '500px', 
                  fontSize : '40px',
                  height: '110px'
                  }, 'slow')
        .animate({
                  borderRadius: '900px',
                  marginTop: '200px'
        }, 'fast')
        .animate({
                  borderRadius: '0px',
                  marginLeft: '0px'
        }, 'slow')
        .animate({
                  borderRadius: '100px',
                  marginLeft: '0px'
        }, 'slow')
        .animate({
                  marginLeft: '500px', 
                  fontSize : '40px',
                  height: '110px'
          }, 'slow');

  });



}); // -------- ++++++++++++++ FIN de $(document).ready +++++++++++++++++ ------------