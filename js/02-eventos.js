'use strict';

$(document).ready(function(){
  //alert('Eventos cargado');
// ---------------------- +++++++++++++++ mouseOver & mouseOut
  var caja = $('#caja');
  caja.mouseover(function(){
    console.log('caja over', caja);
    $(this).css('background', 'red');
  }); // ---------------- FIN function mouseover --------
  caja.mouseout(function(){
    console.log('caja out', caja);
    $(this).css('background', 'green');
  }); // ---------------- FIN function mouseover --------

// ------------------------ ++++++++++++++ Hover

  caja.



}); // ------------------- ++++++++++++++++ FIN $(document).ready ++++++++++++++++ ---------------------
