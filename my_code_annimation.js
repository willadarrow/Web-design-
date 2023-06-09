$(document).ready(function(){
 
   $(".fontsize").click(function(){
     $("h2").animate({

           "left": "100px"           
			}, 1000); 
   });

      $(".two").click(function(){
     $("h2").animate({

           "font-size": "1em",
	   "width": "50%"            
			}, 1000); 
   });

      $(".three").click(function(){
     $("h2").animate({

           "font-size": "4em",
	   "width": "60%",
           "top": "+=20px"            
			}, 1000); 
   });

 $(".four").click(function(){
     $("h2").animate({

           "font-size": "toggle",
	   "width": "60%",
           "top": "20px"            
			}, 1000); 
   });


 $(".five").click(function(){
     $("h2").animate({

           "font-size": "toggle",
	   "width": "60%",
           "top": "20px"            
			}, 1000, function() {
				$("h3").fadeToggle(1000);

			}); 
   });

});
