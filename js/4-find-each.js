$(function(){
    
    'use strict'
    
$('body').find('p').eq(1).css('color', 'red');
    
    //dla obiektow jq musi być przed numerem z tablicy .eq i nawias nie kwadratowy a okrągły
    
    console.log($('body').find('p').eq(1));

    
$('p').each(function(index) {
    var size = 10;
    $(this).css('font-size', size*(index+1) + 'px');
    
    // dla każdego kolejnego p powieksz size o 10... wow
} );
    
    
    
});
