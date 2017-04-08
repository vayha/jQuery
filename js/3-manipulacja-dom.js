$(function(){
    
    'use strict'
    
    var textpar = $('#paragraf').text();
    console.log(textpar);
    
    $('.paragraf').text(textpar + ' dodany');
    
    $('.paragrafnext').html('<strong>TEXT</strong>');
    
    $('#first').append(' dodaj do naglowka');
    
    $('#first').after(' dodaj za naglowkiem');
    
   var przedNaglowkiem = $('div').html();
    
    $('#first').before(przedNaglowkiem);
   // chwyć id-first a następnie przed to załaduj zdefinowanego vara
    
    
    
   $('strong').remove();

    $('h3').empty();
   
    

    $('p').css('background-color', 'red');
    $('p').css({'background-color': 'pink', 'color':'yellow'});
    
    var poleTekstowe = $('input').val();
    console.log(poleTekstowe);
    
    $('input').val(textpar); //zmienil tekst dla inputa
    
    $('h2').addClass('blue'); //dodał klase do h2
    
    $('p').removeClass('paragraf');
    
    
});