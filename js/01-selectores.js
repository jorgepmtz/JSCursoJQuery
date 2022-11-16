'use strict';
// ------ puedo usar $ o puedo usar JQuery cualquier de los dos se refieren al objeto JQuery
// ------ entre parentesis (document) va el selector y despues .ready calquier método
$(document).ready(function(){
  console.log('Estamos listos con JQuery !!')  

  // ------ Selector ID -----------------
  $("#rojo").css("background-color", "red")
            .css('color', 'white');
  $("#amarillo").css("background-color", "yellow")
                .css('color', 'blue');
  $("#verde").css("background-color", "green")
                .css('color', 'white');
  // ------ Selector clase ---------------

  var miClase = $('.zebra').css('padding', '10px');
  
  // console.log('todo zebra ->', miClase);
  // console.log( 'Elemento [0] ->', miClase[0]);
  // console.log( 'Elemento .eq(1) ->', miClase.eq(1));   // ---------- De esta manera se tiene un metodo de JQuery ya junto -------

  // miClase.css('border', '5px dashed grey ');

  $('.sinBorde').click(function(){
    console.log('click dado!!', $(this))
    $(this).addClass('zebra');
  });

  // ---------- Selectores de etiqueta ------------
  var parrafos = $('p').css('cursor','pointer');
  parrafos.click(function(){
    // console.log('Click en parrafo',parrafos);
    var este = $(this);
    if (!este.hasClass('grande')){
      este.addClass('grande');
    }else{
      este.removeClass('grande');
    }
  });
  
  // ---------------- Selectores de Atributo --------------------
  
  $('[title = Google]').css('background', '#ccc');
  $('[title = Facebook]').css('background', 'lightblue');

  // ---------- Otros --------------
  //$('p, a').addClass('margen-superior');

  //var busqueda = $('#caja').find('.resaltado'); // ----- Cuando NO tenemos claro los elemento con la clase de resaltado dentro de caja
  var busqueda = $('#caja, .resaltado'); // ----- Cuando SI tenemos claro los elemento con la clase de resaltado dentro de caja
  console.log( 'busqueda = ', busqueda);

}); // ------------- Fin de (document).ready(function(){ . . . . })







