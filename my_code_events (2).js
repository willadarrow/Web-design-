$(document).ready(function(){
//anonymous function
   $("h1").click(function(){
      $(this).css("color","blue");    
   
   });
   $("h1").mousedown(function(){
      $(this).css("background-color","yellow");    
   
   });

   $("h1").mouseup(function(){
      $(this).css("background-color","transparent");    
   
   });

 $("h1").mouseenter(function(){
      $(this).css("color","white");    
   
   });

   $("h1").mouseleave(function(){
      $(this).css("color","black");
          
   
   });

 $("#stop").click(function(){   
      $("*").unbind("mouseleave");    
   
   });




});
