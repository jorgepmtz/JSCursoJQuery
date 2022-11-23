'use strict';
$(document).ready(function(){
  reloadLinks();
  $('#add_btn')
    .removeAttr('disabled')
    .click(function(){
      var valor = $('#add_link');
      console.log(valor.val());
      $('#menu').append('<li> <a href="'+ valor.val() + '" ></a></li>');    // ---------- Si utilizo prepend : lo añadiría al principio de la lista
      valor.val('');
      reloadLinks();
   });

  function reloadLinks(){
    $('a').each(function(index){
      var esto = $(this);
      var enlace = esto.attr('href');
      esto.attr('target', '_blank'); // ------- le puedo incorporar atributos con attr (aqui lo abre en una pestaña nueva) ------
      esto.text(enlace);
    });
  };

}); // -------------------------------- document.ready END ---------------------------

