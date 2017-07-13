function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "-100px";
    document.getElementById("main").style.marginRight = "100px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginRight= "0px";
    document.getElementById("main").style.marginLeft= "0px";
}
