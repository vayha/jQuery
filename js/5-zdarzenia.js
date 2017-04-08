$(function(){
    
    'use strict'
    
$('h1').on({
    'click': function() {
        $(this).css('color', 'red');
    },
    'mouseover' : function() {
        $(this).css('background-color', 'blue');
    },
    
    'mouseout' : function() {
        $(this).css('background-color', 'inintial');
    } 

});
    
    
});