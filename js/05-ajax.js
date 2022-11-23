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


}); //------------------------ Fin de $(document).ready() -------------------