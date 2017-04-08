$(function(){
    'use strict'
    
    
    var paragraphs = $('p');
    console.log(paragraphs);
   
    
    var paragrapOne = $('#first');
    console.log(paragrapOne);
    
    var paragraphNot = $('p:not(.paragraf)');
    console.log(paragraphNot);
// wszystkie poza klasa paragraf*/
    
    var paragraphsIns = $('div > p');
    console.log(paragraphsIns);
// wszyskie zagnieżdzone
    
    
});  