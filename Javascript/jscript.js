function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
}

var flag = false;

$(function() {
  $('#bruins').on('click', function(e){
  	if(flag == false){
  		 $('body').addClass("bruinsClass");
       	$('#hello').addClass("background");
       	flag = true;
  		}
  		else{
  		 $('body').removeClass("bruinsClass");
       	$('#hello').removeClass("background");
       	flag = false;
  		}







    
  });
});

