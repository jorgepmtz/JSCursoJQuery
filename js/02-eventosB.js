'use strict';

$(document).ready(function(){

  var caja = $('#caja');

  // caja.mouseover(function(){
  //   console.log('caja over', caja);
  //   $(this).css('background', 'red');
  // }); // ---------------- FIN function mouseover --------
  // caja.mouseout(function(){
  //   console.log('caja out', caja);
  //   $(this).css('background', 'green');
  // }); // ---------------- FIN function mouseover --------

// ------------------------ ++++++++++++++ Hover

  function cambiaRojo(){
    $(this).css('background', 'red');
  };

  function cambiaVerde(){
    $(this).css('background', 'green');
  };


  caja.hover(cambiaRojo, cambiaVerde);

// ------------------------ ++++++++++++++ Click y Doble Click

  caja.click(function(){
    $(this).css('background', 'blue')
           .css('color', 'white'); 
  });

  caja.dblclick(function(){
    $(this).css('background', 'pink')
           .css('color', 'red'); 
  });

// -------------------------- +++++++++++ Focus y Blur

  var nombre = $('#nombre');
  var datos = $('#datos');

  nombre.focus(function(){
    $(this).css('border', '2px solid green');
  });
  
  nombre.blur(function(){
    $(this).css('border', '2px solid transparent');
    datos.text($(this).val()).show();
  });

// -------------------------- ++++++++++++ MouseDownd & MOuseUp

  datos.mousedown(function(){
    $(this).css('border-color', 'orange');
  })

  datos.mouseup(function(){
    $(this).css('border-color', 'blue');
  })


 // ------------------------ ++++++++++++ MouseMove
 
  $(document).mousemove(function(){
    //$('body').css)('cursor', 'none');
    $('#sigueme').css('left',event.clientX)     // 2022 11 17 : Me marca como desactualizada la instrucción  event ---------------------- ++++++++++++++++++
                 .css('top',event.clientY);

  });

}); // ------------------- ++++++++++++++++ FIN $(document).ready ++++++++++++++++ ---------------------