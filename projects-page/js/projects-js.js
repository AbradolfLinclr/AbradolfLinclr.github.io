function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
}


$(window).scroll(function () { 
if ($(window).scrollTop() > $('body').height() / 6) {
$('#upArrow').fadeTo(25, 1);
} 
if ($(window).scrollTop() < $('body').height() / 6) {
$('#upArrow').fadeTo(25, 0);
} 
});

$('#upArrow').click(function(){
$("html, body").animate({ scrollTop: 0 }, "slow");
});