'use strict';

$(document).ready(function(){

// ------ +++++++++++ LOAD +++++++++++ ----------
  // $('#id_datos').load('https://reqres.in/');

// ------- ++++++++ GET y POST ------ +++++++++++++
  $.get ('https://reqres.in/api/users', {page: 2}, function(response){
    //console.log(response);
    response.data.forEach((element, index) => {
      $('#id_datos').append('<p>' +element.first_name+' '+element.last_name+'</p>')
    });
  })  
  
  $('#id_formulario').submit(function(e){
    e.preventDefault();
    var usuario = {
      name : $('input[name="name"]').val(),
      web : $('input[name="web"]').val()
    };
    console.log('usuario', usuario);
    /*
    $.post($(this).attr('action'), usuario, function(response){
      console.log('post reponse', response);
    }).done(function(){
      alert('usuario añadido correctamente');
    });
    */
    // ------------------- Usando $.ajax -----------------------

    $.ajax({
      type :  'POST',
      dataType :  'json',               // ------------- Esto ni es necesario es opcional ------------
      cotentType : 'application/json',  // ------------- Esto ni es necesario es opcional ------------
      url : $(this).attr('action'),
      data : usuario,
      beforeSend : function(){
        console.log('Enviando registro . . . ')
      },
      success : function(response){
        console.log('seccess(response)', response);
      },
      error : function(){
        console.log('error', 'Ha ocurrido un error . . . . ');        
      },
      timeout : 1000
    });


    return false;
  });  //------------------- +++++++++++++ Fin de .submit +++++++++++++++++-------------


}); //------------------------ Fin de $(document).ready() -------------------